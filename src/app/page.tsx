
import CircularGallery from '@/components/circular-gallery';
import TextType from '@/components/text-type';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  const galleryItems = [
    { image: '/aftereffects_logo.png', text: 'After Effects' },
    { image: '/blender_logo.png', text: 'Blender' },
    { image: '/canva_logo.png', text: 'Canva' },
    { image: '/davinci_logo.png', text: 'DaVinci Resolve' },
    { image: '/flnew_logo.png', text: 'FL Studio' },
    { image: '/h_logo.png', text: 'Houdini' },
    { image: '/unity_logo.png', text: 'Unity' },
    { image: '/web_logo.png', text: 'Web Dev' },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="pt-24 text-center flex-shrink-0">
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
      <div className="my-8 text-center flex-shrink-0 relative z-10">
        <div className="inline-flex gap-4">
          <Button asChild size="lg">
            <Link href="/portfolio">PORTFOLIO</Link>
          </Button>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">CONTACT US</Link>
          </Button>
        </div>
      </div>
      <div className="w-full flex-1 relative -mt-20">
        <CircularGallery items={galleryItems} bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.05} scrollSpeed={0.5} autoScrollSpeed={0.05} />
      </div>
    </div>
  );
}
