
'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const MusicVisualizer = dynamic(() => import('@/components/music-visualizer').then(mod => mod.MusicVisualizer), {
  loading: () => (
    <div className="w-full flex flex-col items-center">
        <p className="text-muted-foreground mb-8 text-center">
            Loading Music Visualizer...
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-48" />
            <Skeleton className="h-10 w-48" />
        </div>
        <div className="w-full max-w-md px-4">
            <div className="flex items-center gap-4">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-5 w-full rounded-full" />
                <Skeleton className="h-4 w-12" />
            </div>
        </div>
    </div>
  ),
  ssr: false,
});

export default function FlStudioLoader() {
    return <MusicVisualizer />;
}
