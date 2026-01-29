'use client';

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
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-16 text-center">
        Our Portfolio
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20">
        {portfolioItems.map((item) => (
          <a
            key={item.slug}
            href={`/portfolio/${item.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 text-center transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-32 h-32">
              <img
                src={item.image}
                alt=""
                aria-hidden="true"
                className="absolute top-2 left-2 h-full w-full object-contain filter grayscale brightness-0"
              />
              <img
                src={item.image}
                alt={`${item.name} logo`}
                className="absolute top-0 left-0 h-full w-full object-contain transition-transform duration-300 group-hover:-translate-x-1.5 group-hover:-translate-y-1.5"
              />
            </div>
            <h3 className="text-xl font-bold text-white">{item.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
