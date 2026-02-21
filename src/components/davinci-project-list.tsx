'use client';

import { motion } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from 'react';
import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

const projects = [
  { 
    name: 'Cinematic Travel Vlog',
    videoUrl: 'https://drive.google.com/file/d/1-9P_itD9k3-s7X6S2kM4N8l5iQZk9Yj7/preview', 
    imageUrl: 'https://picsum.photos/seed/davinci1/400/225',
    imageHint: 'travel video'
  },
  { 
    name: 'Ad',
    videoUrl: 'https://drive.google.com/file/d/1JFz1BNRSxEB-DC3z92_27gJsbZ_BgEP5/preview',
    imageUrl: 'https://picsum.photos/seed/davinci2/400/225',
    imageHint: 'corporate office'
  },
  { 
    name: 'Music Video Edit',
    videoUrl: 'https://drive.google.com/file/d/1-9P_itD9k3-s7X6S2kM4N8l5iQZk9Yj7/preview',
    imageUrl: 'https://picsum.photos/seed/davinci3/400/225',
    imageHint: 'music performance'
  },
    { 
    name: 'Short Film Color Grade',
    videoUrl: 'https://drive.google.com/file/d/1-9P_itD9k3-s7X6S2kM4N8l5iQZk9Yj7/preview',
    imageUrl: 'https://picsum.photos/seed/davinci4/400/225',
    imageHint: 'film scene'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.25, 1, 0.5, 1],
      duration: 0.8,
    },
  },
};

export function DaVinciProjectList() {
  const [activeVideo, setActiveVideo] = useState('');

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div
          key={project.name}
          variants={itemVariants}
        >
          <Dialog onOpenChange={(open) => {
            if (open) {
              setActiveVideo(project.videoUrl!);
            } else {
              setActiveVideo('');
            }
          }}>
            <DialogTrigger asChild>
              <div className="group relative bg-card/50 border border-border rounded-lg text-left text-foreground shadow-md cursor-pointer hover:bg-card/70 transition-colors overflow-hidden">
                <div className="relative aspect-video">
                  <Image 
                    src={project.imageUrl} 
                    alt={`Preview for ${project.name}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end justify-start p-4">
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="h-16 w-16 text-white/80 transform-gpu transition-transform group-hover:scale-110" />
                     </div>
                  </div>
                </div>
                <h3 className="p-4 text-lg font-semibold">{project.name}</h3>
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-auto p-0 border-0 overflow-hidden">
              <DialogHeader>
                <DialogTitle className="sr-only">{project.name}</DialogTitle>
              </DialogHeader>
              <div className="aspect-video">
                {activeVideo === project.videoUrl && (
                  <iframe
                    src={activeVideo}
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
        </motion.div>
      ))}
    </motion.div>
  );
}
