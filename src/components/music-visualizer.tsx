'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';

const projects = [
  { id: 1, title: 'Project Alpha', src: '/music/track1.mp3' },
  { id: 2, title: 'Project Beta', src: '/music/track2.mp3' },
  { id: 3, title: 'Project Gamma', src: '/music/track3.mp3' },
  { id: 4, title: 'Project Delta', src: '/music/track4.mp3' },
  { id: 5, title: 'Project Epsilon', src: '/music/track5.mp3' },
];

export function MusicVisualizer() {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaElementAudioSourceNode | null>(null);
  const animationFrameId = useRef<number | null>(null);

  const setupAudioContext = useCallback(() => {
    if (!audioRef.current || isInitialized) return;

    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    audioContextRef.current = context;

    const analyser = context.createAnalyser();
    analyser.fftSize = 256;
    analyserRef.current = analyser;

    const source = context.createMediaElementSource(audioRef.current);
    source.connect(analyser);
    analyser.connect(context.destination);
    sourceRef.current = source;

    setIsInitialized(true);
  }, [isInitialized]);

  const handlePlayPause = (index: number) => {
    // Resume AudioContext if it's suspended
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (currentSongIndex === index) {
      // Toggle play/pause for the current song
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      // Play a new song
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };
  
  useEffect(() => {
    if (currentSongIndex !== null && audioRef.current) {
        audioRef.current.src = projects[currentSongIndex].src;
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
    }
  }, [currentSongIndex]);


  const draw = useCallback(() => {
    animationFrameId.current = requestAnimationFrame(draw);
    if (!analyserRef.current || !canvasRef.current) {
      return;
    }

    const analyser = analyserRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    if (isPlaying) {
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      analyser.getByteFrequencyData(dataArray);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 1.5;
      let barHeight;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i] * (canvas.height / 255);

        const r = 255 * (i / bufferLength);
        const g = 100;
        const b = 150 + (barHeight / canvas.height) * 105;

        ctx.fillStyle = `rgba(${r},${g},${b}, 0.8)`;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    } else {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isInitialized) {
      animationFrameId.current = requestAnimationFrame(draw);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
        animationFrameId.current = null;
      }
    };
  }, [isInitialized, draw]);
  
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial set
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInitialInteraction = () => {
    if (!isInitialized) {
      setupAudioContext();
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
        <p className="text-muted-foreground mb-8 text-center">
            CLICK TO LISTEN THE SONG
        </p>
        <div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          onClick={handleInitialInteraction}
        >
        {projects.map((project, index) => (
          <Button
            key={project.id}
            onClick={() => handlePlayPause(index)}
            variant={currentSongIndex === index ? 'default' : 'outline'}
            className="flex items-center gap-2 w-48"
          >
            {currentSongIndex === index && isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            <span>{project.title}</span>
          </Button>
        ))}
      </div>
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
            setIsPlaying(false);
            if (currentSongIndex !== null && currentSongIndex < projects.length - 1) {
                // Autoplay next song
                setCurrentSongIndex(currentSongIndex + 1);
            } else {
                setCurrentSongIndex(null); // End of playlist
            }
        }}
        crossOrigin="anonymous"
      />
      <canvas
        ref={canvasRef}
        className="fixed bottom-0 left-0 w-full h-48 pointer-events-none"
        height="192"
      />
    </div>
  );
}
