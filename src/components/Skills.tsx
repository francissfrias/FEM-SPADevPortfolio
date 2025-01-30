import ringpattern from '/images/pattern-rings.svg';
const skillsArray: {
  title: string;
  experience: string;
}[] = [
  {
    title: 'HTML',
    experience: '4 Years Experience',
  },
  {
    title: 'CSS',
    experience: '4 Years Experience',
  },
  {
    title: 'Javascript',
    experience: '4 Years Experience',
  },
  {
    title: 'Accessibility',
    experience: '4 Years Experience',
  },
  {
    title: 'React',
    experience: '3 Years Experience',
  },
  {
    title: 'Sass',
    experience: '3 Years Experience',
  },
];

const Skills = () => {
  return (
    <div className='relative flex flex-col items-center gap-6 py-10 border-y-2 border-secondary w-full md:grid md:grid-rows-3 md:grid-cols-2 md:gap-y-[52px] md:gap-x-[7px] md:border-b-0'>
      {skillsArray.map((skill, index) => (
        <div key={index} className='text-center md:text-left'>
          <h1 className='text-primary font-bold text-skillsTitle md:text-[48px] md:leading-[56px] md:tracking-[-1.5px]'>
            {skill.title}
          </h1>
          <h5 className='text-secondary font-medium  text-skillsDescription md:text-[18px] md:leading-7 md:tracking-normal'>
            {skill.experience}
          </h5>
        </div>
      ))}
      <img
        className='absolute bottom-0 left-0 z-0 translate-y-1/2 translate-x-1/2 md:translate-x-full'
        src={ringpattern}
      />
    </div>
  );
};

export default Skills;
