'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Device = 'desktop' | 'tablet' | 'mobile';

interface WindowSize {
  width: number;
  height: number;
  device: Device;
}

const WindowSizeContext = createContext<WindowSize | undefined>(undefined);

export const useWindowSize = (): WindowSize => {
  const context = useContext(WindowSizeContext);
  if (!context) {
    throw new Error('useWindowSize must be used within a WindowSizeProvider');
  }
  return context;
};

const getDeviceType = (width: number): Device => {
  if (width < 768) return 'mobile';
  if (width >= 768 && width < 1024) return 'tablet';
  return 'desktop';
};

export const WindowSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
    device: typeof window !== 'undefined' ? getDeviceType(window.innerWidth) : 'desktop',
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        device: getDeviceType(window.innerWidth),
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <WindowSizeContext.Provider value={windowSize}>{children}</WindowSizeContext.Provider>;
};
