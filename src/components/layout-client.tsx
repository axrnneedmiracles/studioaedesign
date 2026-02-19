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
      <div className="fixed top-0 left-0 -z-20 h-full w-full">
        <LightPillar
          topColor="#5227FF"
          bottomColor="#FF9FFC"
          intensity={1.2}
          rotationSpeed={0.3}
          glowAmount={0.003}
          pillarWidth={5.5}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={26}
          interactive={false}
          mixBlendMode="screen"
          quality="medium"
        />
      </div>
      {children}
    </>
  );
}
