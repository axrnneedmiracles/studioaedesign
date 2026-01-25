import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import LightPillar from '@/components/light-pillar';
import StaggeredMenu from '@/components/staggered-menu';
import SplashCursor from '@/components/splash-cursor';

export const metadata: Metadata = {
  title: 'Studio Noir',
  description: 'A professional portfolio for a creative media studio.',
};

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
  { label: 'Portfolio', ariaLabel: 'View our portfolio', link: '/portfolio' },
  { label: 'Services', ariaLabel: 'View our services', link: '/services' },
  { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased flex flex-col min-h-screen">
        <SplashCursor
          SPLAT_FORCE={3000}
          DENSITY_DISSIPATION={4}
          SPLAT_RADIUS={0.2}
        />
        <StaggeredMenu
            isFixed={true}
            items={menuItems}
            socialItems={socialItems}
          />
        <div className="fixed inset-0 -z-20">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={2}
            rotationSpeed={0.3}
            glowAmount={0.002}
            pillarWidth={3}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={25}
            interactive={false}
            mixBlendMode="screen"
            quality="high"
          />
        </div>
        <div className="fixed inset-0 bg-black/70 -z-10" />

        <div className="relative z-0 flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
