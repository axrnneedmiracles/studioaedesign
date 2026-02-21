'use client';

import dynamic from 'next/dynamic';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { Skeleton } from './ui/skeleton';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';

const SplineViewer = dynamic(() => import('@/components/spline-viewer'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-background">
      <Skeleton className="w-96 h-96" />
    </div>
  )
});

const projects = [
  {
    name: 'Ad',
    videoUrl: 'https://drive.google.com/file/d/11POtYbAOTh73WKcX4izQ85cOdNCGkXN_/preview', // placeholder
    position: 'absolute top-[45%] left-1/2 -translate-x-1/2 z-10'
  },
  {
    name: 'Game Intro',
    videoUrl: 'https://drive.google.com/file/d/11POtYbAOTh73WKcX4izQ85cOdNCGkXN_/preview', // placeholder
    position: 'absolute top-[45%] right-16 z-10'
  },
  {
    name: 'Stop Motion',
    videoUrl: 'https://drive.google.com/file/d/11POtYbAOTh73WKcX4izQ85cOdNCGkXN_/preview', // placeholder
    position: 'absolute bottom-24 left-16 z-10'
  },
  {
    name: 'Cinematic Scene',
    videoUrl: 'https://drive.google.com/file/d/11POtYbAOTh73WKcX4izQ85cOdNCGkXN_/preview',
    position: 'absolute bottom-24 right-16 z-10'
  }
];


export default function AfterEffectsPortfolio() {
  const [activeProjectName, setActiveProjectName] = useState('');

  const openDialog = (projectName: string) => {
    setActiveProjectName(projectName);
  };

  const closeDialog = () => {
    setActiveProjectName('');
  };


  return (
    <div className="relative h-screen w-screen">
      <SplineViewer url="https://prod.spline.design/nNVlZLUGN-p0k6T7/scene.splinecode" />

      {projects.map((project) => (
        <div key={project.name} className={project.position}>
            <Dialog onOpenChange={(open) => open ? openDialog(project.name) : closeDialog()}>
                <DialogTrigger asChild>
                    <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <PlayCircle className="mr-2 h-4 w-4" />
                        {project.name}
                    </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-auto p-0 border-0 overflow-hidden">
                <DialogHeader>
                    <DialogTitle className="sr-only">{project.name}</DialogTitle>
                </DialogHeader>
                <div className="aspect-video">
                    {/* The iframe is only rendered when this specific dialog is open */}
                    {activeProjectName === project.name && (
                    <iframe
                        src={project.videoUrl}
                        width="100%"
                        height="100%"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        className="border-0"
                    ></iframe>
                    )}
                </div>
                </DialogContent>
            </Dialog>
        </div>
      ))}

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
