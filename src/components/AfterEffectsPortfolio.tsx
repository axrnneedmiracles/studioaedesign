'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

const SplineViewer = dynamic(() => import('@/components/spline-viewer'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <Skeleton className="w-96 h-96" />
    </div>
  )
});

export default function AfterEffectsPortfolio() {
  return (
    <div className="relative h-screen w-screen">
      <SplineViewer url="https://prod.spline.design/nNVlZLUGN-p0k6T7/scene.splinecode" />

      {/* 1. "one below the bitrate studio heading" */}
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 z-10">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">
            <Mail />
            Contact Us
          </Link>
        </Button>
      </div>
      
      {/* 2. "one on right below bitrate studio heading" */}
      <div className="absolute top-[45%] right-16 z-10">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">
            <Mail />
            Contact Us
          </Link>
        </Button>
      </div>
      
      {/* 3. "one at bottom left but slightly towards middle" */}
      <div className="absolute bottom-24 left-16 z-10">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">
            <Mail />
            Contact Us
          </Link>
        </Button>
      </div>

      {/* 4. "and center same type on right below" */}
      <div className="absolute bottom-24 right-16 z-10">
        <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/contact">
            <Mail />
            Contact Us
          </Link>
        </Button>
      </div>

      {/* "Back to Portfolio" Button */}
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
