'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useIsMobile = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'object') return;

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // set initial value after mount for hydration safety
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [pathname]);

  return isMobile;
};
