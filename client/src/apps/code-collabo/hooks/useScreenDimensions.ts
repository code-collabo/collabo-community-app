import { useEffect, useState } from 'react';

interface ScreenDimensions {
  isMobile: boolean;
  screenWidth: number;
}

// Custom hook for determining if the screen is mobile and returning screen width
const useScreenDimensions = (): ScreenDimensions => {
  const [screenDimensions, setScreenDimensions] = useState<ScreenDimensions>({
    isMobile: false,
    screenWidth:typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenDimensions({
        isMobile: newScreenWidth <= 600,
        screenWidth: newScreenWidth,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenDimensions;
};

export default useScreenDimensions;
