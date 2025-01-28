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
    <div className=' flex flex-col items-center gap-6 py-10 border-y-2 border-secondary w-full'>
      {skillsArray.map((skill, index) => (
        <div key={index} className='text-center '>
          <h1 className='text-primary font-bold text-skillsTitle'>
            {skill.title}
          </h1>
          <h5 className='text-secondary font-medium  text-skillsDescription'>
            {skill.experience}
          </h5>
        </div>
      ))}
    </div>
  );
};

export default Skills;
