import ChromaGrid from '@/components/chroma-grid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Portfolio | Studio Noir',
    description: 'Explore our work in an interactive gallery.',
};

const portfolioItems = [
  {
    image: '/blender_logo.png',
    title: 'Blender',
    url: '/portfolio/blender',
    borderColor: '#F5792A',
    gradient: 'linear-gradient(145deg, #F5792A, #2E68A8, #000)',
  },
  {
    image: '/davinci_logo.png',
    title: 'DaVinci Resolve',
    url: '/portfolio/davinci',
    borderColor: '#33A1F2',
    gradient: 'linear-gradient(145deg, #33A1F2, #B3312F, #000)',
  },
  {
    image: '/aftereffects_logo.png',
    title: 'After Effects',
    url: '/portfolio/after-effects',
    borderColor: '#D492FF',
    gradient: 'linear-gradient(145deg, #D492FF, #392D64, #000)',
  },
  {
    image: '/flstudio_logo.png',
    title: 'FL Studio',
    url: '/portfolio/fl-studio',
    borderColor: '#FF4D00',
    gradient: 'linear-gradient(145deg, #FF4D00, #4A7A41, #000)',
  },
  {
    image: '/unity_logo.png',
    title: 'Unity',
    url: '/portfolio/unity',
    borderColor: '#222C36',
    gradient: 'linear-gradient(145deg, #888888, #222C36, #000)',
  },
  {
    image: '/h_logo.png',
    title: 'Houdini',
    url: '/portfolio/houdini',
    borderColor: '#FF7000',
    gradient: 'linear-gradient(145deg, #FF7000, #F7B500, #000)',
  },
  {
    image: '/webdev_logo.png',
    title: 'Web Dev',
    url: '/portfolio/web-dev',
    borderColor: '#4E5A8F',
    gradient: 'linear-gradient(145deg, #4E5A8F, #2D3754, #000)',
  },
  {
    image: '/canva_logo.png',
    title: 'Canva',
    url: '/portfolio/canva',
    borderColor: '#00C4CC',
    gradient: 'linear-gradient(145deg, #00C4CC, #8D5AF1, #000)',
  },
];


export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          Our Portfolio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          A selection of our work. Hover over the cards to see the effect.
        </p>
      </header>

      <div className="relative w-full">
        <ChromaGrid items={portfolioItems} />
      </div>
    </div>
  );
}
