import DomeGallery from '@/components/dome-gallery';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Studio Noir',
    description: 'Explore our work in a 3D interactive gallery.',
};

const portfolioItems = [
  {
    image: '/blender_logo.png',
    title: 'Blender',
  },
  {
    image: '/davinci_logo.png',
    title: 'DaVinci Resolve',
  },
  {
    image: '/aftereffects_logo.png',
    title: 'After Effects',
  },
  {
    image: '/flstudio_logo.png',
    title: 'FL Studio',
  },
  {
    image: '/unity_logo.png',
    title: 'Unity',
  },
  {
    image: '/h_logo.png',
    title: 'Houdini',
  },
  {
    image: '/webdev_logo.png',
    title: 'Web Dev',
  },
  {
    image: '/canva_logo.png',
    title: 'Canva',
  },
];

const galleryImages = portfolioItems.map(item => ({ src: item.image, alt: item.title }));

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          Our Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A selection of our work. Drag to explore the dome, click to enlarge.
        </p>
      </header>

      <div className="relative h-[900px] w-full">
        <DomeGallery images={galleryImages} />
      </div>
    </div>
  );
}
