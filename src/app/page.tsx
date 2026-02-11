
import TextType from '@/components/text-type';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import HomeCircularGallery from '@/components/home-circular-gallery';

export default function Home() {
  const galleryItems = [
    { image: '/aftereffects_logo.png', text: 'After Effects', url: '/portfolio/after-effects' },
    { image: '/blender_logo.png', text: 'Blender', url: '/portfolio/blender' },
    { image: '/canva_logo.png', text: 'Canva', url: '/portfolio/canva' },
    { image: '/davinci_logo.png', text: 'DaVinci Resolve', url: '/portfolio/davinci' },
    { image: '/flnew_logo.png', text: 'FL Studio', url: '/portfolio/fl-studio' },
    { image: '/h_logo.png', text: 'Houdini', url: '/portfolio/houdini' },
    { image: '/unity_logo.png', text: 'Unity', url: '/portfolio/unity' },
    { image: '/web_logo.png', text: 'Web Dev', url: '/portfolio/web-dev' },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="pt-32 text-center flex-shrink-0 min-h-[188px] flex flex-col justify-center">
        <TextType
          as="h1"
          text={['WELCOME TO BITRATE STUDIO']}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor
          cursorCharacter="█"
          loop={false}
          className="text-4xl md:text-6xl font-headline font-bold"
        />
      </div>
      <div className="mt-8 text-center flex-shrink-0 relative z-10">
        <div className="inline-flex gap-4">
          <Button asChild size="lg">
            <Link href="/portfolio">PORTFOLIO</Link>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">CONTACT US</Link>
          </Button>
        </div>
      </div>
      <div className="w-full flex-1 relative -mt-[4.5rem] pb-8">
        <HomeCircularGallery items={galleryItems} />
      </div>
    </div>
  );
}
