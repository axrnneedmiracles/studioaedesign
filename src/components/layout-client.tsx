
'use client';

import { usePathname } from 'next/navigation';
import SplashCursor from '@/components/splash-cursor';
import LightPillar from '@/components/light-pillar';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showHeavyAnimations = pathname === '/' || pathname === '/about';

  return (
    <>
      {showHeavyAnimations && <SplashCursor />}
      {showHeavyAnimations && (
        <div className="fixed top-0 left-0 -z-20 h-full w-full">
          <LightPillar
            topColor="#5227FF"
            bottomColor="#FF9FFC"
            intensity={0.7}
            rotationSpeed={0.2}
            glowAmount={0.002}
            pillarWidth={5.5}
            pillarHeight={0.4}
            noiseIntensity={0.5}
            pillarRotation={26}
            interactive={false}
            mixBlendMode="screen"
            quality="low"
          />
        </div>
      )}
      {children}
    </>
  );
}
