'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const CanvaShowcase = dynamic(() => import('@/components/canva-showcase').then(mod => mod.CanvaShowcase), {
  loading: () => (
    <div className="relative flex justify-center items-center w-full min-h-[60vh] my-16">
        <div className="relative w-[30vw] max-w-lg aspect-video">
            <Skeleton className="w-full h-full" />
        </div>
    </div>
  ),
  ssr: false,
});

export default function CanvaLoader() {
    return <CanvaShowcase />;
}
