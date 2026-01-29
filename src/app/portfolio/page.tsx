'use client';

import AnimatedList from '@/components/animated-list';

const portfolioItems = [
    { name: 'BLENDER', slug: 'blender', image: '/blender_logo.png' },
    { name: 'DAVINCI', slug: 'davinci', image: '/davinci_logo.png' },
    { name: 'AFTER EFFECTS', slug: 'after-effects', image: '/aftereffects_logo.png' },
    { name: 'FL STUDIO', slug: 'fl-studio', image: '/flstudio_logo.png' },
    { name: 'UNITY', slug: 'unity', image: '/unity_logo.png' },
    { name: 'HOUDINI', slug: 'houdini', image: '/h_logo.png' },
    { name: 'WEB DEV', slug: 'web-dev', image: '/webdev_logo.png' },
    { name: 'CANVA', slug: 'canva', image: '/canva_logo.png' },
];

type PortfolioItem = {
  name: string;
  slug: string;
  image: string;
}

export default function PortfolioPage() {
  const handleItemSelect = (item: PortfolioItem) => {
    if (item && item.slug) {
      window.open(`/portfolio/${item.slug}`, '_blank');
    }
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center p-8 pt-24">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-center shrink-0 mb-12">
        Our Portfolio
      </h1>
      <div className="w-full max-w-lg flex-grow min-h-0">
        <AnimatedList
          items={portfolioItems}
          onItemSelect={handleItemSelect}
          itemClassName="transition-transform duration-300 hover:scale-105"
        />
      </div>
    </div>
  );
}
