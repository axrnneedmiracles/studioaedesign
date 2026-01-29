'use client';

import ChromaGrid from '@/components/chroma-grid';

const portfolioItems = [
  {
    image: '/blender_logo.png',
    title: 'Blender',
    subtitle: '3D Creations',
    handle: '@blender',
    borderColor: '#F57D2C',
    gradient: 'linear-gradient(145deg, #F57D2C, #000)',
    url: '/portfolio/blender'
  },
  {
    image: '/davinci_logo.png',
    title: 'DaVinci Resolve',
    subtitle: 'Video Editing',
    handle: '@davinci',
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #3B82F6, #000)',
    url: '/portfolio/davinci'
  },
    {
    image: '/aftereffects_logo.png',
    title: 'After Effects',
    subtitle: 'Motion Graphics',
    handle: '@aftereffects',
    borderColor: '#D946EF',
    gradient: 'linear-gradient(145deg, #D946EF, #000)',
    url: '/portfolio/after-effects'
  },
    {
    image: '/flstudio_logo.png',
    title: 'FL Studio',
    subtitle: 'Music Production',
    handle: '@flstudio',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(145deg, #F59E0B, #000)',
    url: '/portfolio/fl-studio'
  },
    {
    image: '/unity_logo.png',
    title: 'Unity',
    subtitle: 'Game Development',
    handle: '@unity',
    borderColor: '#4B5563',
    gradient: 'linear-gradient(145deg, #4B5563, #000)',
    url: '/portfolio/unity'
  },
  {
    image: '/h_logo.png',
    title: 'Houdini',
    subtitle: 'VFX & Simulation',
    handle: '@houdini',
    borderColor: '#EF4444',
    gradient: 'linear-gradient(145deg, #EF4444, #000)',
    url: '/portfolio/houdini'
  },
    {
    image: '/webdev_logo.png',
    title: 'Web Dev',
    subtitle: 'Full-stack Solutions',
    handle: '@webdev',
    borderColor: '#06B6D4',
    gradient: 'linear-gradient(145deg, #06B6D4, #000)',
    url: '/portfolio/web-dev'
  },
    {
    image: '/canva_logo.png',
    title: 'Canva',
    subtitle: 'Graphic Design',
    handle: '@canva',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #8B5CF6, #000)',
    url: '/portfolio/canva'
  },
];

export default function PortfolioPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-0 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-center shrink-0 mb-12 mt-24">
        Our Portfolio
      </h1>
      <div className="w-full flex-grow relative">
        <ChromaGrid 
          items={portfolioItems}
          radius={400}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </div>
  );
}
