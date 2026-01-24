import TextType from '@/components/text-type';

export default function Home() {
  return (
    <div className="flex-grow flex items-start justify-center pt-32">
      <TextType
        as="h1"
        text={["welcome to our studio"]}
        typingSpeed={100}
        pauseDuration={3000}
        showCursor
        cursorCharacter="|"
        loop={false}
        className="text-4xl md:text-6xl font-headline text-center"
      />
    </div>
  );
}
