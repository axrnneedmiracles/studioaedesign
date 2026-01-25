import FlowingMenu from '@/components/flowing-menu';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Studio Noir',
  description: 'Explore the creative work and projects by Studio Noir.',
};

export default function PortfolioPage() {
  const menuItems = [
    {
      link: '/portfolio/blender',
      text: 'Blender',
      image: '/blender_logo.png',
    },
    {
      link: '/portfolio/davinci',
      text: 'DaVinci Resolve',
      image: '/davinci_logo.png',
    },
    {
      link: '/portfolio/canva',
      text: 'Canva',
      image: '/canva_logo.png',
    },
    {
      link: '/portfolio/after-effects',
      text: 'After Effects',
      image: '/aftereffects_logo.png',
    },
    {
      link: '/portfolio/houdini',
      text: 'Houdini',
      image: '/h_logo.png',
    },
    {
      link: '/portfolio/web-dev',
      text: 'Web Dev',
      image: '/webdev_logo.png',
    },
    {
      link: '/portfolio/unity',
      text: 'Unity',
      image: '/unity_logo.png',
    },
    {
      link: '/portfolio/fl-studio',
      text: 'FL Studio',
      image: 'https://picsum.photos/seed/flstudio/600/400', // Placeholder
    },
  ];

  return (
    <div className="h-screen w-full">
      <FlowingMenu
        items={menuItems}
        speed={25}
        textColor="hsl(var(--foreground))"
        bgColor="hsl(var(--background))"
        marqueeBgColor="hsl(var(--foreground))"
        marqueeTextColor="hsl(var(--background))"
        borderColor="hsl(var(--border))"
      />
    </div>
  );
}
