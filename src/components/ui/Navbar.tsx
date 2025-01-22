import { cn } from '../../helper/utils';
import frontendmentoricon from '/public/images/icon-frontend-mentor.svg';
import githubicon from '/public/images/icon-github.svg';
import linkedinicon from '/public/images/icon-linkedin.svg';
import twittericon from '/public/images/icon-twitter.svg';

const Navbar = () => {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-5 py-5 px-24 text-primary '
      )}
    >
      <a className='font-bold text-medium'>adamkeyes</a>
      <ul className='flex gap-[26px] justify-center items-center w-[9.624rem]'>
        <li>
          <a>
            <img src={githubicon} />
          </a>
        </li>
        <li>
          <a>
            <img src={frontendmentoricon} />
          </a>
        </li>
        <li>
          <a>
            <img src={linkedinicon} />
          </a>
        </li>
        <li>
          <a>
            <img src={twittericon} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
