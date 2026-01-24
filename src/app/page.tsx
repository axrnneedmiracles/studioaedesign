import CircularGallery from '@/components/circular-gallery';
import TextType from '@/components/text-type';

export default function Home() {
  const galleryItems = [
    { image: 'https://picsum.photos/seed/gallery1/800/600', text: 'Blender' },
    { image: 'https://picsum.photos/seed/gallery2/800/600', text: 'DaVinci Resolve' },
    { image: 'https://picsum.photos/seed/gallery3/800/600', text: 'Studio' },
    { image: 'https://picsum.photos/seed/gallery4/800/600', text: 'After Effects' },
    { image: 'https://picsum.photos/seed/gallery5/800/600', text: 'Cinema 4D' },
    { image: 'https://picsum.photos/seed/gallery6/800/600', text: 'Figma' }
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
