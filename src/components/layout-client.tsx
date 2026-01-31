'use client';
import { usePathname } from 'next/navigation';
import SplashCursor from '@/components/splash-cursor';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showCursor = !pathname.startsWith('/portfolio');

  return (
    <>
      {showCursor && <SplashCursor />}
      {children}
    </>
  );
}
