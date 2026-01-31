'use client';

import { FC, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import ClickSpark from './click-spark';
import ElectricBorder from './electric-border';

interface ChromaGridItem {
  image: string;
  title: string;
  subtitle?: string;
  handle?: string;
  borderColor?: string;
  gradient?: string;
  url?: string;
  location?: string;
}

interface ChromaGridProps {
  items?: ChromaGridItem[];
  className?: string;
}

const ChromaGrid: FC<ChromaGridProps> = ({ items, className = '' }) => {
  const router = useRouter();

  const demo: ChromaGridItem[] = [
    {
      image: 'https://i.pravatar.cc/300?img=8',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#4F46E5',
      gradient: 'linear-gradient(145deg,#4F46E5,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=11',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#10B981',
      gradient: 'linear-gradient(210deg,#10B981,#000)',
      url: 'https://linkedin.com/in/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Morgan Blake',
      subtitle: 'UI/UX Designer',
      handle: '@morganblake',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(165deg,#F59E0B,#000)',
      url: 'https://dribbble.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=16',
      title: 'Casey Park',
      subtitle: 'Data Scientist',
      handle: '@caseypark',
      borderColor: '#EF4444',
      gradient: 'linear-gradient(195deg,#EF4444,#000)',
      url: 'https://kaggle.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=25',
      title: 'Sam Kim',
      subtitle: 'Mobile Developer',
      handle: '@thesamkim',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(225deg,#8B5CF6,#000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=60',
      title: 'Tyler Rodriguez',
      subtitle: 'Cloud Architect',
      handle: '@tylerrod',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(135deg,#06B6D4,#000)',
      url: 'https://aws.amazon.com/'
    }
  ];

  const data = items?.length ? items : demo;

  const handleCardClick = (url?: string) => {
    if (url) {
      if (url.startsWith('http')) {
        window.open(url, '_blank', 'noopener,noreferrer');
      } else {
        router.push(url);
      }
    }
  };

  const handleCardMove = (e: MouseEvent<HTMLDivElement>) => {
    const c = e.currentTarget;
    const rect = c.getBoundingClientRect();
    c.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    c.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  };

  return (
    <div
      className={`relative w-full flex flex-wrap justify-center items-center gap-16 ${className}`}
    >
      {data.map((c, i) => (
        <ClickSpark key={i} sparkColor={c.borderColor || '#fff'}>
          <div
            onMouseMove={handleCardMove}
            onClick={() => handleCardClick(c.url)}
            className="cursor-pointer"
          >
            <ElectricBorder
              color={c.borderColor || '#fff'}
              borderRadius={20}
              className="w-[300px] h-[300px]"
            >
              <article
                  className="group relative z-10 flex flex-col h-full rounded-[20px]"
                  style={{
                      background: c.gradient,
                      '--spotlight-color': 'rgba(255,255,255,0.3)',
                  }}
                >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-20 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%)'
                  }}
                />
                <div className="relative z-10 flex-1 p-[10px] box-border">
                  <img src={c.image} alt={c.title} loading="lazy" className="w-full h-full object-contain rounded-[10px]" />
                </div>
                <footer className="relative z-10 p-3 text-white font-sans grid grid-cols-[1fr_auto] gap-x-3 gap-y-1">
                  <h3 className="m-0 text-[1.05rem] font-semibold">{c.title}</h3>
                  {c.handle && <span className="text-[0.95rem] opacity-80 text-right">{c.handle}</span>}
                  {c.subtitle && <p className="m-0 text-[0.85rem] opacity-85">{c.subtitle}</p>}
                  {c.location && <span className="text-[0.85rem] opacity-85 text-right">{c.location}</span>}
                </footer>
              </article>
            </ElectricBorder>
          </div>
        </ClickSpark>
      ))}
    </div>
  );
};

export default ChromaGrid;
