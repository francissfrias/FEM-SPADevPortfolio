import useMediaQuery from '../hooks/useMediaQuery';
import { ContactButton } from './shared/ContactMeButton';
import { Button } from './ui/Button';
import project1Desktop from '/images/thumbnail-project-1-large.webp';
import project1Mobile from '/images/thumbnail-project-1-small.webp';
import project2Desktop from '/images/thumbnail-project-2-large.webp';
import project2Mobile from '/images/thumbnail-project-2-small.webp';
import project3Desktop from '/images/thumbnail-project-3-large.webp';
import project3Mobile from '/images/thumbnail-project-3-small.webp';
import project4Desktop from '/images/thumbnail-project-4-large.webp';
import project4Mobile from '/images/thumbnail-project-4-small.webp';
import project5Desktop from '/images/thumbnail-project-5-large.webp';
import project5Mobile from '/images/thumbnail-project-5-small.webp';
import project6Desktop from '/images/thumbnail-project-6-large.webp';
import project6Mobile from '/images/thumbnail-project-6-small.webp';

const projectsArray: {
  mobileSrc: string;
  desktopSrc: string;
  title: string;
  techStack: string[];
}[] = [
  {
    mobileSrc: project1Mobile,
    desktopSrc: project1Desktop,
    title: 'DESIGN PORTFOLIO',
    techStack: ['HTML', 'CSS'],
  },
  {
    mobileSrc: project2Mobile,
    desktopSrc: project2Desktop,
    title: 'E-LEARNING LANDING PAGE',
    techStack: ['HTML', 'CSS'],
  },
  {
    mobileSrc: project3Mobile,
    desktopSrc: project3Desktop,
    title: 'TODO WEB APP',
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    mobileSrc: project4Mobile,
    desktopSrc: project4Desktop,
    title: 'ENTERTAINMENT WEB APP',
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    mobileSrc: project5Mobile,
    desktopSrc: project5Desktop,
    title: 'MEMORY GAME',
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
  {
    mobileSrc: project6Mobile,
    desktopSrc: project6Desktop,
    title: 'ART GALLERY SHOWCASE',
    techStack: ['HTML', 'CSS', 'JAVASCRIPT'],
  },
];

const Projects = () => {
  const { isMobile } = useMediaQuery();

  return (
    <div className='w-full flex flex-col gap-10'>
      <div className='flex justify-between items-center'>
        <h1 className='text-primary text-[40px] leading-10 tracking-[-1.14px] font-bold'>
          Projects
        </h1>
        <ContactButton />
      </div>
      <div className='flex flex-col gap-10'>
        {projectsArray.map((project, index) => (
          <div key={index} className='flex flex-col gap-5'>
            <img
              src={isMobile ? project.mobileSrc : project.desktopSrc}
              alt={project.title}
              className='w-full  object-cover '
              loading='lazy'
              aria-labelledby='project-title'
            />
            <h3
              className='text-medium tracking-normal text-primary font-bold uppercase'
              id='project-title'
            >
              {project.title}
            </h3>
            <ul className='flex gap-[18px]'>
              {project.techStack.map((tech, techIndex) => (
                <li
                  key={techIndex}
                  className='text-secondary text-[18px] leading-7 tracking-normal font-medium'
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className='flex gap-[34px]'>
              <Button className='w-fit'>View Project</Button>
              <Button>View Code</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
