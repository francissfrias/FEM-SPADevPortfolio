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
    isTablet: window.innerWidth > 768 && window.innerWidth <= 1279,
    isLaptop: window.innerWidth > 1279 && window.innerWidth <= 1439,
    isDesktop: window.innerWidth > 1439,
  });

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMediaQuery((prev) => {
        if (
          prev.isMobile === width <= 375 &&
          prev.isTablet === (width > 768 && width <= 1279) &&
          prev.isLaptop === (width > 1279 && width <= 1439) &&
          prev.isDesktop === width > 1439
        ) {
          return prev;
        }

        return {
          isMobile: width <= 375,
          isTablet: width > 768 && width <= 1279,
          isLaptop: width > 1279 && width <= 1439,
          isDesktop: width > 1439,
        };
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return mediaQuery;
};

export default useMediaQuery;
