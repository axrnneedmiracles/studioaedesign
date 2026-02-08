import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import StaggeredMenu from '@/components/staggered-menu';
import LayoutClient from '@/components/layout-client';
import Hyperspeed from '@/components/hyperspeed';
import SplashCursor from '@/components/splash-cursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'BITRATE STUDIO',
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
    <html lang="en" className={`${inter.variable} dark`}>
      <head />
      <body className="font-body antialiased flex flex-col min-h-screen bg-background">
        <LayoutClient>
          <StaggeredMenu
              isFixed={true}
              items={menuItems}
              socialItems={socialItems}
            />
           <SplashCursor
            DENSITY_DISSIPATION={4}
            SPLAT_RADIUS={0.1}
          />
           <div className="fixed top-0 left-0 -z-10 h-full w-full">
            <Hyperspeed
              effectOptions={{
                distortion: 'turbulentDistortion',
                length: 400,
                roadWidth: 10,
                islandWidth: 2,
                lanesPerRoad: 3,
                fov: 90,
                fovSpeedUp: 150,
                speedUp: 2,
                carLightsFade: 0.4,
                totalSideLightSticks: 20,
                lightPairsPerRoadWay: 40,
                shoulderLinesWidthPercentage: 0.05,
                brokenLinesWidthPercentage: 0.1,
                brokenLinesLengthPercentage: 0.5,
                lightStickWidth: [0.12, 0.5],
                lightStickHeight: [1.3, 1.7],
                movingAwaySpeed: [60, 80],
                movingCloserSpeed: [-120, -160],
                carLightsLength: [12, 80],
                carLightsRadius: [0.05, 0.14],
                carWidthPercentage: [0.3, 0.5],
                carShiftX: [-0.8, 0.8],
                carFloorSeparation: [0, 5],
                colors: {
                  roadColor: 526344,
                  islandColor: 657930,
                  background: 0,
                  shoulderLines: 1250072,
                  brokenLines: 1250072,
                  leftCars: [14177983, 6770850, 12732332],
                  rightCars: [242627, 941733, 3294549],
                  sticks: 242627,
                },
              }}
            />
          </div>

          <div className="relative z-0 flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
          <Toaster />
        </LayoutClient>
      </body>
    </html>
  );
}
