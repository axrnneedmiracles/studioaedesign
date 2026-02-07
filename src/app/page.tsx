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
    <div className="flex-grow flex flex-col items-center h-screen pt-32 space-y-12">
      <TextType
        as="h1"
        text={['WELCOME TO BITRATE STUDIO']}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="█"
        loop={false}
        className="text-4xl md:text-6xl font-headline text-center font-bold"
      />
      <div className="flex gap-4 mt-8">
        <Button asChild variant="outline" size="lg">
          <Link href="/portfolio">PORTFOLIO</Link>
        </Button>
        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">CONTACT US</Link>
        </Button>
      </div>
      <div className="w-full h-[600px] relative">
        <CircularGallery items={galleryItems} bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.05} scrollSpeed={2} autoScrollSpeed={0.05} />
      </div>
    </div>
  );
}
