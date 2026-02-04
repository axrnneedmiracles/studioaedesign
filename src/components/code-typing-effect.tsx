
'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const codeSnippet = `[~] Initializing user session...
[+] Authenticating credentials...
[+] Access granted. Welcome, user.

[~] Acquiring attention...
[+] Attention module engaged.
[~] Calibrating consumer happiness matrix...

// Deploying creative solution...
function makeAwesome(input) {
    let output = input;
    output += ' + 🚀'; // Add rocket
    output = output.toUpperCase();
    for (let i=0; i<5; i++) {
        console.log('Making it awesome...');
    }
    return output;
}

[~] Executing makeAwesome('project')...
[+] Project is now awesome.
> Analyzing results...
> Consumer happiness levels: 110%
> Satisfaction index: CRITICAL

> Mission successful.
> Logging out...`;

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
