'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const SplineViewer = dynamic(() => import('@/components/spline-viewer'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <Skeleton className="w-96 h-96" />
    </div>
  )
});

export default function FigmaPortfolio() {
  return (
    <div className="relative h-screen w-screen">
      <SplineViewer url="https://prod.spline.design/zl5FsyN1lpjVXi1a/scene.splinecode" />
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <Button asChild variant="outline">
          <Link href="/portfolio">
            <ArrowLeft />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  );
}
