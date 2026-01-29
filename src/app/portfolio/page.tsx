'use client';

import TiltedCard from '@/components/tilted-card';

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

export default function PortfolioPage() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-12 text-center">
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {portfolioItems.map((item) => (
            <TiltedCard
              key={item.slug}
              imageSrc={item.image}
              altText={item.name}
              captionText={item.name}
              containerHeight="250px"
              containerWidth="250px"
              imageHeight="250px"
              imageWidth="250px"
              scaleOnHover={1.05}
              displayOverlayContent={true}
              onClick={() => window.open(`/portfolio/${item.slug}`, '_blank')}
              overlayContent={
                <h3 className="p-4 text-center text-2xl font-bold text-white">
                  {item.name}
                </h3>
              }
            />
        ))}
      </div>
    </div>
  );
}
