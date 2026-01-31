import Image from 'next/image';
import Link from 'next/link';

const portfolioItems = [
  {
    image: '/blender_logo.png',
    title: 'Blender',
    url: '/portfolio/blender',
  },
  {
    image: '/davinci_logo.png',
    title: 'DaVinci Resolve',
    url: '/portfolio/davinci',
  },
  {
    image: '/aftereffects_logo.png',
    title: 'After Effects',
    url: '/portfolio/after-effects',
  },
  {
    image: '/flstudio_logo.png',
    title: 'FL Studio',
    url: '/portfolio/fl-studio',
  },
  {
    image: '/unity_logo.png',
    title: 'Unity',
    url: '/portfolio/unity',
  },
  {
    image: '/h_logo.png',
    title: 'Houdini',
    url: '/portfolio/houdini',
  },
  {
    image: '/webdev_logo.png',
    title: 'Web Dev',
    url: '/portfolio/web-dev',
  },
  {
    image: '/canva_logo.png',
    title: 'Canva',
    url: '/portfolio/canva',
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
          A selection of our work. Click to see more.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {portfolioItems.map((item) => (
          <Link key={item.url} href={item.url} className="block group">
            <div className="relative w-full aspect-square rounded-2xl bg-card/10 backdrop-blur-sm border border-white/10 p-6 flex flex-col items-center justify-center text-center transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:[transform:translateZ(20px)]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(29,78,216,0.4)_0%,transparent_80%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
