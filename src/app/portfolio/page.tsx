'use client';

import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';

const portfolioItems = [
    { name: 'BLENDER', slug: 'blender', image: '/blender_logo.png' },
    { name: 'DAVINCI', slug: 'davinci', image: '/davinci_logo.png' },
    { name: 'AFTER EFFECTS', slug: 'after-effects', image: '/aftereffects_logo.png' },
    { name: 'FL STUDIO', slug: 'fl-studio', image: '/flstudio_logo.png' },
    { name: 'UNITY', slug: 'unity', image: '/unity_logo.png' },
    { name: 'HOUDINI', slug: 'houdini', image: '/h_logo.png' },
    { name: 'WEB DEV', slug: 'web-dev', image: '/webdev_logo.png' },
    { name: 'CANVA', slug: 'canva', image: '/canva_logo.png' },
];

type PortfolioItem = {
  name: string;
  slug: string;
  image: string;
}

export default function PortfolioPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      scrollContainer.scrollTop += event.deltaY;
    };
    
    // Add wheel listener to the window
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      // Clean up the event listener
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);


  const handleItemClick = (item: PortfolioItem) => {
    if (item && item.slug) {
      window.open(`/portfolio/${item.slug}`, '_blank');
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center p-8 overflow-hidden">
      <h1 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-center shrink-0 mb-12">
        Our Portfolio
      </h1>
      
      <div 
        ref={scrollContainerRef}
        className="w-full max-w-lg h-[60vh] overflow-y-auto scrollbar-hide p-4"
      >
        <ul
          className="list-none m-0 p-0"
        >
          {portfolioItems.map((item) => (
            <motion.li
              key={item.slug}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="mb-4"
            >
              <div
                onClick={() => handleItemClick(item)}
                className="p-4 bg-black/20 backdrop-blur-sm rounded-lg flex items-center gap-6 cursor-pointer transition-colors duration-200 hover:bg-white/10"
              >
                <div className="relative w-16 h-16 group shrink-0">
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1 left-1 h-full w-full object-contain"
                    style={{ filter: 'brightness(0) saturate(100%) invert(30%) sepia(94%) saturate(2811%) hue-rotate(228deg) brightness(101%) contrast(102%)' }}
                  />
                  <img
                    src={item.image}
                    alt={`${item.name} logo`}
                    className="absolute top-0 left-0 h-full w-full object-contain transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white">{item.name}</h3>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
