'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const floatingImages = [
  { src: '/canva/pic1.jpg', alt: 'Canva design 1', className: 'top-10 -left-40 w-48 h-32 rotate-[-15deg]' },
  { src: '/canva/pic2.jpg', alt: 'Canva design 2', className: 'bottom-20 -right-44 w-56 h-40 rotate-[10deg]' },
  { src: '/canva/pic4.jpg', alt: 'Canva design 4', className: 'top-20 -right-44 w-40 h-56 rotate-[-5deg]' },
  { src: '/canva/pic5.jpg', alt: 'Canva design 5', className: 'bottom-10 -left-48 w-56 h-40 rotate-[8deg]' },
];

export function CanvaShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative flex justify-center items-center w-full min-h-[60vh] my-16">
      {/* Floating images */}
      {floatingImages.map((img, index) => (
        <motion.div
          key={index}
          className={`absolute ${img.className}`}
          initial={{ y: 0, scale: 1 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={224}
            height={160}
            className="object-contain rounded-lg shadow-2xl transition-transform duration-300 hover:scale-110 hover:z-20"
            data-ai-hint="graphic design"
          />
        </motion.div>
      ))}

      {/* TV screen */}
      <div className="relative w-[50vw] max-w-3xl aspect-video bg-black border-[1.5vw] md:border-8 border-gray-800 rounded-2xl shadow-2xl p-1 md:p-2 flex items-center justify-center z-10">
        <div className="w-full h-full relative overflow-hidden rounded-md">
          <video
            ref={videoRef}
            src="/canva/canvavid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-2 right-2 md:bottom-4 md:right-4">
            <Button onClick={toggleMute} variant="ghost" size="icon" className="text-white bg-black/50 hover:bg-black/75 h-8 w-8 md:h-10 md:w-10">
              {isMuted ? <VolumeX className="h-4 w-4 md:h-5 md:w-5"/> : <Volume2 className="h-4 w-4 md:h-5 md:w-5"/>}
              <span className="sr-only">Toggle mute</span>
            </Button>
          </div>
        </div>
        {/* TV stand */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/4 h-4 bg-gray-800 rounded-b-md"></div>
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-gray-700 rounded-b-lg shadow-inner"></div>
      </div>
    </div>
  );
}
