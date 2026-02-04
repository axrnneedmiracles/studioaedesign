'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type ImageScrollerProps = {
  images: { src: string; alt: string; hint: string }[];
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
};

export function ImageScroller({ images, speed = 'slow', className }: ImageScrollerProps) {
  const duration = {
    slow: '80s',
    normal: '40s',
    fast: '20s',
  }[speed];

  const scrollerContent = (
    images.map((item, index) => (
        <li key={index} className="relative w-[300px] h-[200px] flex-shrink-0">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="rounded-lg object-cover"
            data-ai-hint={item.hint}
          />
        </li>
      ))
  );

  return (
    <div
      className={cn(
        'w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]',
        className
      )}
    >
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll"
        style={{ '--scroll-duration': duration } as React.CSSProperties}
      >
        {scrollerContent}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-4 animate-infinite-scroll"
        aria-hidden="true"
        style={{ '--scroll-duration': duration } as React.CSSProperties}
      >
        {scrollerContent}
      </ul>
    </div>
  );
}
