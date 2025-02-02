import { ContactButton } from './shared/ContactMeButton';
import desktopProfilePicture from '/images/image-profile-desktop.webp';
import mobileProfilePicture from '/images/image-profile-mobile.webp';
import tabletProfilePicture from '/images/image-profile-tablet.webp';

import circlePattern from '/images/pattern-circle.svg';
import ringpattern from '/images/pattern-rings.svg';

const Introduction = () => {
  return (
    <>
      <img
        className='absolute top-0 left-0 z-0 -translate-x-[11.75rem] md:-translate-x-[300px] xl:translate-y-[60px] xl:-translate-x-1/2'
        src={ringpattern}
      />
      <img
        className='absolute top-0 right-0 z-0 translate-x-1/2 translate-y-[8.25rem] md:z-10 md:translate-x-[80px] md:translate-y-[400px] xl:left-0 xl:translate-x-[600px]'
        src={circlePattern}
      />
      <img
        src={mobileProfilePicture}
        className='w-[10.875rem] h-[23.938rem] block top-0 -translate-y-[7.5rem] -mb-[7.5rem] md:hidden '
      />

      <div className='relative flex flex-row  xl:w-full xl:mb-[120px] '>
        <div className='flex flex-col items-center gap-6 md:mt-[70px] md:min-w-[445px] md:items-start md:justify-center md:z-40 md:gap-[60px] xl:min-w-[706px] xl:w-[706px] xl:gap-[66px] xl:mt-[126px]'>
          <h1 className='text-primary text-center text-[40px] font-bold tracking-[-1.14px] leading-10 md:text-[72px] md:leading-[72px] md:tracking-[-2.05px] md:text-left xl:text-[88px] xl:leading-[88px] xl:tracking-[-2.5px] xl:w-[706px]  '>
            Nice to <br className='hidden md:block xl:hidden' /> meet you!{' '}
            <br className='block md:hidden xl:hidden' />
            I’m{' '}
            <span className='border-b-2  border-accent w-fit  mx-auto md:whitespace-nowrap '>
              Adam Keyes.
            </span>
          </h1>
          <p className='text-secondary font-medium text-center text-[16px] leading-[26px] tracking-normal md:text-[18px] md:leading-7 md:tracking-normal md:text-left xl:text-[18px] "'>
            Based in the UK, I’m a front-end developer
            <br className='hidden xl:block' /> passionate about building
            accessible web apps <br className='hidden xl:block' />
            that users love.
          </p>
          <ContactButton />
        </div>
        <img
          src={tabletProfilePicture}
          className='hidden md:block w-[322px] h-[600px] bottom-0 left-0 -translate-y-[72px] -translate-x-7  -mb-[7.5rem] z-0 xl:hidden'
        />
        <img
          src={desktopProfilePicture}
          className='hidden xl:block absolute z-0 w-[445px] h-[720px] top-0 right-0 -translate-y-[70px]'
        />
      </div>
    </>
  );
};

export default Introduction;
