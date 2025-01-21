import { Button } from './components/Button';
import Navbar from './components/Navbar';
import mobileProfilePicture from '/images/image-profile-mobile.webp';
import circlePattern from '/images/pattern-circle.svg';
import ringpattern from '/images/pattern-rings.svg';

const App = () => {
  return (
    <div className='min-h-dvh overflow-hidden relative px-4 '>
      <header className='top-0  '>
        <Navbar />
      </header>
      <div className='relative flex flex-col items-center z-10 gap-10 '>
        <img
          className='absolute top-0 left-0 z-0 -translate-x-[11.75rem] '
          src={ringpattern}
        />
        <img
          className='absolute top-0 right-0 z-0 translate-x-1/2 translate-y-[8.25rem]'
          src={circlePattern}
        />
        <img
          src={mobileProfilePicture}
          className='w-[10.875rem] h-[23.938rem] block top-0 -translate-y-[7.5rem] -mb-[7.5rem] '
        />
        <div className=' flex flex-col items-center gap-6 '>
          <h1 className='text-primary text-center text-[40px] font-bold tracking-[-1.14px] leading-10'>
            Nice to meet you!,
            <br />
            I’m{' '}
            <span className='border-b-2  border-accent w-fit  mx-auto '>
              Adam Keyes.
            </span>
          </h1>
          <p className='text-secondary font-medium text-center text-[16px] leading-[26px] tracking-normal'>
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Button>Contact Me</Button>
        </div>
        <div className=' flex flex-col items-center gap-6 py-10 border-y-2 border-secondary w-full'>
          <div className='text-center '>
            <h1 className='text-primary font-bold text-skillsTitle'>HTML</h1>
            <h5 className='text-secondary font-medium  text-skillsDescription'>
              4 Years Experience
            </h5>
          </div>
          <div className='text-center '>
            <h1 className='text-primary font-bold text-skillsTitle'>CSS</h1>
            <h5 className='text-secondary font-medium  text-skillsDescription'>
              4 Years Experience
            </h5>
          </div>
          <div className='text-center '>
            <h1 className='text-primary font-bold text-skillsTitle'>
              Javascript
            </h1>
            <h5 className='text-secondary font-medium  text-skillsDescription'>
              4 Years Experience
            </h5>
          </div>
          <div className='text-center '>
            <h1 className='text-primary font-bold text-skillsTitle'>
              Accessibility
            </h1>
            <h5 className='text-secondary font-medium  text-skillsDescription'>
              4 Years Experience
            </h5>
          </div>
          <div className='text-center '>
            <h1 className='text-primary font-bold text-skillsTitle'>React</h1>
            <h5 className='text-secondary font-medium  text-skillsDescription'>
              3 Years Experience
            </h5>
          </div>
          <div className='text-center '>
            <h1 className='text-primary font-bold text-skillsTitle'>Sass</h1>
            <h5 className='text-secondary font-medium  text-skillsDescription'>
              3 Years Experience
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
