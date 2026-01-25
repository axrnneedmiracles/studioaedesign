'use client';

import AnimatedList from '@/components/animated-list';

const portfolioItems = [
    { name: 'BLENDER', slug: 'blender' },
    { name: 'DAVINCI', slug: 'davinci' },
    { name: 'AFTER EFFECTS', slug: 'after-effects' },
    { name: 'FL STUDIO', slug: 'fl-studio' },
    { name: 'UNITY', slug: 'unity' },
    { name: 'HOUDINI', slug: 'houdini' },
    { name: 'WEB DEV', slug: 'web-dev' },
    { name: 'CANVA', slug: 'canva' },
];

export default function PortfolioPage() {
  const handleSelect = (item: string) => {
    const selectedItem = portfolioItems.find(p => p.name === item);
    if (selectedItem) {
        window.open(`/portfolio/${selectedItem.slug}`, '_blank');
    }
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <AnimatedList
        items={portfolioItems.map(item => item.name)}
        onItemSelect={handleSelect}
      />
    </div>
  );
}
