
'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const codeSnippet = `import React from 'react';
import { Button } from '@/components/ui/button';

const WelcomeComponent = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to Studio Noir
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Crafting digital experiences.
      </p>
      <Button>Get In Touch</Button>
    </div>
  );
};

export default WelcomeComponent;

// Creative code in motion...
function animate() {
  requestAnimationFrame(animate);
  // ... rendering logic
}
`;

const CodeTypingEffect = () => {
  const [text, setText] = useState('');
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const charIndex = useRef(0);
  const timeoutIdRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    }
  }, []);

  useEffect(() => {
    const type = () => {
      if (charIndex.current < codeSnippet.length) {
        setText(codeSnippet.substring(0, charIndex.current + 1));
        charIndex.current++;
        
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }

        timeoutIdRef.current = setTimeout(type, 25 + Math.random() * 25);
      } else {
        timeoutIdRef.current = setTimeout(() => {
            setText('');
            charIndex.current = 0;
            type();
        }, 3000);
      }
    };
    
    timeoutIdRef.current = setTimeout(type, 500);

    return () => {
      if(timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black/30 border border-border/50 rounded-lg p-4 w-full h-[400px] overflow-auto font-mono text-sm text-accent scrollbar-hide">
      <pre className="whitespace-pre-wrap">
        <code>{text}</code>
        <span ref={cursorRef} className="ml-1 -mb-1 inline-block h-4 w-2 bg-accent" />
      </pre>
    </div>
  );
};

export default CodeTypingEffect;
