'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

type AOSProviderProps = {
  children: React.ReactNode;
};

export function AOSProvider({ children }: AOSProviderProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return <>{children}</>;
}