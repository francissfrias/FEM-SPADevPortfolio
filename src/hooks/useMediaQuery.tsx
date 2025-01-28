import React from 'react';

const useMediaQuery = ({ maxWidth }: { maxWidth: number }): boolean => {
  const [isMobile, setIsMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [maxWidth]);

  return isMobile;
};

export default useMediaQuery;
