import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { AnimatedProjectList } from '@/components/animated-project-list';
import Model3D from '@/components/Model3D';
import { MusicVisualizer } from '@/components/music-visualizer';

const portfolioItems = [
  'blender',
  'davinci',
  'canva',
  'after-effects',
  'web-dev',
  'unity',
  'fl-studio',
  'houdini',
];

export async function generateStaticParams() {
  return portfolioItems.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { slug } = params;
  if (!portfolioItems.includes(slug)) {
    return {
      title: 'Not Found',
    };
  }

  const title = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} Projects | Studio Noir`,
    description: `A list of sample projects for ${title}.`,
  };
}

export default function PortfolioSamplePage({ params }: { params: { slug:string } }) {
  if (!portfolioItems.includes(params.slug)) {
    notFound();
  }

  const title = params.slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const renderContent = () => {
    switch (params.slug) {
      case 'blender':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <AnimatedProjectList />
            <Model3D />
          </div>
        );
      case 'fl-studio':
        return <MusicVisualizer />;
      default:
        return (
          <div className="w-full max-w-2xl mx-auto text-center p-8 bg-card/50 border rounded-lg">
            <p className="text-muted-foreground">Sample project content for {title}.</p>
          </div>
        );
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 min-h-screen">
      <header className="w-full max-w-4xl text-center mb-12 mx-auto">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          {title} Projects
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          {params.slug === 'blender'
            ? 'Here are some of our Blender projects.'
            : params.slug === 'fl-studio'
            ? 'A selection of our musical works.'
            : 'A list of sample projects.'}
        </p>
      </header>
      
      <div className="w-full max-w-6xl mx-auto">
        {renderContent()}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline">
          <Link href="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
