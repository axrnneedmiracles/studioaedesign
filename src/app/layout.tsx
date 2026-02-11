
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import StaggeredMenu from '@/components/staggered-menu';
import LayoutClient from '@/components/layout-client';

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
          <div className="relative z-0 flex flex-col min-h-screen">
            <main className="flex-grow">{children}</main>
          </div>
          <Toaster />
        </LayoutClient>
      </body>
    </html>
  );
}
