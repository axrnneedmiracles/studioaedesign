'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

const projects = [
  { id: 1, title: 'DISTORTED HOPE', src: '/music/track1.mp3' },
  { id: 2, title: 'INDUSTRIAL CLOUD', src: '/music/track2.mp3' },
  { id: 3, title: 'SOFT GRISIS', src: '/music/track3.mp3' },
  { id: 4, title: 'SOUL SAMPLE SWITCH', src: '/music/track4.mp3' },
  { id: 5, title: 'EPIC CRIES', src: '/music/track5.mp3' },
];

export function MusicVisualizer() {
  const [currentSongIndex, setCurrentSongIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
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
    if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }

    if (currentSongIndex === index) {
      if (isPlaying) {
        audioRef.current?.pause();
        setIsPlaying(false);
      } else {
        audioRef.current?.play();
        setIsPlaying(true);
      }
    } else {
      setCurrentSongIndex(index);
      setIsPlaying(true);
    }
  };
  
  useEffect(() => {
    if (currentSongIndex !== null && audioRef.current) {
        audioRef.current.src = projects[currentSongIndex].src;
        audioRef.current.play().catch(e => console.error("Error playing audio:", e));
        setCurrentTime(0);
        setDuration(0);
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
        const parent = canvasRef.current.parentElement;
        if (parent) {
          canvasRef.current.width = parent.clientWidth;
        }
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleInitialInteraction = () => {
    if (!isInitialized) {
      setupAudioContext();
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time) || time === 0) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
      setCurrentTime(value[0]);
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

      <div className="w-full max-w-md px-4">
        <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground w-12 text-center">{formatTime(currentTime)}</span>
            <Slider
                value={[currentTime]}
                max={duration || 1}
                step={1}
                onValueChange={handleSliderChange}
                disabled={currentSongIndex === null}
                className={cn(currentSongIndex === null && "opacity-50 cursor-not-allowed")}
            />
            <span className="text-sm text-muted-foreground w-12 text-center">{formatTime(duration)}</span>
        </div>
      </div>
      
      <audio
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => {
            setIsPlaying(false);
            if (currentSongIndex !== null && currentSongIndex < projects.length - 1) {
                setCurrentSongIndex(currentSongIndex + 1);
            } else {
                setCurrentSongIndex(null);
            }
        }}
        onLoadedMetadata={() => {
          if (audioRef.current) setDuration(audioRef.current.duration);
        }}
        onTimeUpdate={() => {
          if (audioRef.current) setCurrentTime(audioRef.current.currentTime);
        }}
        crossOrigin="anonymous"
      />
      <div className="fixed bottom-0 left-0 w-full h-48 pointer-events-none">
        <canvas
            ref={canvasRef}
            className="w-full h-full"
            height="192"
        />
      </div>
    </div>
  );
}
