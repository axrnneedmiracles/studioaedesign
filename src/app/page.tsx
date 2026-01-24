import CircularGallery from '@/components/circular-gallery';
import TextType from '@/components/text-type';

export default function Home() {
  const galleryItems = [
    { image: '/blender_logo.png', text: 'Blender' },
    { image: '/davinci_logo.png', text: 'DaVinci Resolve' },
    { image: '/studio_logo.png', text: 'Studio' },
    { image: '/aftereffects_logo.png', text: 'After Effects' },
    { image: '/cinema4d_logo.png', text: 'Cinema 4D' },
    { image: '/figma_logo.png', text: 'Figma' }
  ];

  return (
    <div className="flex-grow flex flex-col items-center justify-between h-screen py-10">
      <TextType
        as="h1"
        text={['WELCOME TO OUR MEDIA STUDIO']}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="█"
        loop={false}
        className="text-4xl md:text-6xl font-headline text-center font-bold"
      />
      <div className="w-full h-[600px] relative">
        <CircularGallery items={galleryItems} bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.05} scrollSpeed={2} />
      </div>
    </div>
  );
}
