import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const portfolioItems = [
  'blender',
  'davinci',
  'canva',
  'after-effects',
  'houdini',
  'web-dev',
  'unity',
  'fl-studio',
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
    title: `${title} Sample | Studio Noir`,
    description: `Sample work for ${title}.`,
  };
}

export default function PortfolioSamplePage({ params }: { params: { slug:string } }) {
  if (!portfolioItems.includes(params.slug)) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24 h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-8">
        Click on Sample to View
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8">
        This is a placeholder page for the portfolio item.
      </p>
      <Button asChild>
        <Link href="/portfolio">Back to Portfolio</Link>
      </Button>
    </div>
  );
}
