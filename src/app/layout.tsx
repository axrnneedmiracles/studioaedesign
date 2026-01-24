import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import LightPillar from '@/components/light-pillar';
import { Header } from '@/components/layout/header';

export const metadata: Metadata = {
  title: 'Studio Noir',
  description: 'A professional portfolio for a creative media studio.',
};

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
          <Header />
          <main className="flex-grow">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
