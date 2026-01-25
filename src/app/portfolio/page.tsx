import FlowingMenu from '@/components/flowing-menu';
import { projects } from '@/lib/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Studio Noir',
  description: 'Explore the creative work and projects by Studio Noir.',
};

export default function PortfolioPage() {
  const menuItems = projects.map((project) => ({
    link: `/portfolio/${project.slug}`,
    text: project.title,
    image: project.coverImage.url,
  }));

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
