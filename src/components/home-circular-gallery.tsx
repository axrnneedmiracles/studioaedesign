
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const CircularGallery = dynamic(() => import('@/components/circular-gallery'), {
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <Skeleton className="w-64 h-64 rounded-full" />
    </div>
  ),
  ssr: false,
});

export default function HomeCircularGallery({ items }: { items: { image: string; text: string; url: string }[] }) {
  return <CircularGallery items={items} bend={1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.05} scrollSpeed={0.5} autoScrollSpeed={0.05} />;
}
