
import type { Metadata } from 'next';
import SplitText from '@/components/split-text';

export const metadata: Metadata = {
  title: 'About Us | BITRATE STUDIO',
  description: 'Learn about the vision and the talented team behind BITRATE STUDIO.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <header className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-4">
          <SplitText splitType="words">About BITRATE STUDIO</SplitText>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          <SplitText splitType="words" delay={20}>Turning ideas into impactful visual and digital experiences.</SplitText>
        </p>
      </header>

      <section className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed text-left">
        <SplitText splitType="words" tag="p" delay={15} ease="power2.out">
          We are a creative media team focused on turning ideas into impactful visual and digital experiences. From concept to execution, we handle media-related work with precision, creativity, and a strong understanding of modern platforms.
        </SplitText>
        <SplitText splitType="words" tag="p" delay={15} ease="power2.out">
          We have worked with various <span className="text-accent-foreground font-semibold">COMPANIES, CONTENT CREATORS, INDIVIDUALS</span>, and <span className="text-accent-foreground font-semibold">ORGANIZATIONS</span> across different industries. Our services currently include <span className="text-accent-foreground font-semibold">VIDEO EDITING</span> (using davinci, after effects),  <span className="text-accent-foreground font-semibold">PHOTO EDITING</span> (using photoshop and canva), <span className="text-accent-foreground font-semibold">MUSIC BEATS</span> and <span className="text-accent-foreground font-semibold">SOUND PRODUCTION</span> (using FL Studio), <span className="text-accent-foreground font-semibold">WEB DEVELOPMENT</span>, <span className="text-accent-foreground font-semibold">PHOTOGRAPHY</span> (local on-site service), and <span className="text-accent-foreground font-semibold">3D work</span> (using Blender for animations, models, and video elements.)
        </SplitText>
        <SplitText splitType="words" tag="p" delay={15} ease="power2.out">
          Our team has collaborated with Creators and <span className="text-accent-foreground font-semibold">BRANDS</span> on platforms such as Twitch, YouTube, X (Twitter), and Instagram, as well as on News Content and Company Advertisements. We have experience editing a wide range of video styles, including <span className="text-accent-foreground font-semibold">VLOGS, GAMING VIDEOS, BIOGRAPHIES, CINEMATIC EDITS</span>, AND <span className="text-accent-foreground font-semibold">ADVERTISEMENTS</span>.
        </SplitText>
        <SplitText splitType="words" tag="p" delay={15} ease="power2.out">
          In game development, we have <span className="text-accent-foreground font-semibold">WORKED</span> with <span className="text-accent-foreground font-semibold">MULTIPLE INDIE STUDIOS</span> and have also collaborated with <span className="text-accent-foreground font-semibold">INTEL GAMING</span> for game testing purposes.
        </SplitText>
        <SplitText splitType="words" tag="p" delay={15} ease="power2.out">
          We also create <span className="text-accent-foreground font-semibold">ORIGINAL BEATS</span> from scratch, tailored entirely to your specific needs.
        </SplitText>
        <SplitText splitType="words" tag="p" delay={15} ease="power2.out">
          Photography services are currently available for local sites only. Please contact us if you need more information or want to discuss availability.
        </SplitText>
      </section>
    </div>
  );
}
