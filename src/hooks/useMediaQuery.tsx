import React from 'react';

interface MediaQueryState {
  isMobile: boolean;
  isTablet: boolean;
  isLaptop: boolean;
  isDesktop: boolean;
}

const useMediaQuery = (): MediaQueryState => {
  const [mediaQuery, setMediaQuery] = React.useState<MediaQueryState>({
    isMobile: window.innerWidth <= 375,
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1024,
    isLaptop: window.innerWidth > 1024 && window.innerWidth <= 1440,
    isDesktop: window.innerWidth > 1440,
  });

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMediaQuery((prev) => {
        if (
          prev.isMobile === width <= 375 &&
          prev.isTablet === (width > 768 && width <= 1024) &&
          prev.isLaptop === (width > 1024 && width <= 1440) &&
          prev.isDesktop === width > 1440
        ) {
          return prev;
        }

        return {
          isMobile: width <= 375,
          isTablet: width > 768 && width <= 1024,
          isLaptop: width > 1024 && width <= 1440,
          isDesktop: width > 1440,
        };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mediaQuery;
};

export default useMediaQuery;
