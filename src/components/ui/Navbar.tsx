import { cn } from '../../helper/utils';
import frontendmentoricon from '/images/icon-frontend-mentor.svg';
import githubicon from '/images/icon-github.svg';
import linkedinicon from '/images/icon-linkedin.svg';
import twittericon from '/images/icon-twitter.svg';

const Navbar = () => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-5 py-5 px-24 text-primary md:flex-row md:justify-between md:items-center md:px-[30px] '
      )}
    >
      <a className='font-bold text-medium md:text-[32px] md:leading-8 md:-tracking-[0.44px]'>
        adamkeyes
      </a>
      <ul className='flex gap-[26px] justify-center items-center w-[9.624rem]  z-50'>
        <li>
          <a>
            <img src={githubicon} className='md:min-w-[24.61px]' />
          </a>
        </li>
        <li>
          <a>
            <img src={frontendmentoricon} className='md:min-w-[24.61px]' />
          </a>
        </li>
        <li>
          <a>
            <img src={linkedinicon} className='md:min-w-[24.61px]' />
          </a>
        </li>
        <li>
          <a>
            <img src={twittericon} className='md:min-w-[24.61px]' />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
