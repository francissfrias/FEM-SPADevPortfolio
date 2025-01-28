import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { Button } from './components/ui/Button';
import { Input } from './components/ui/Input';
import Navbar from './components/ui/Navbar';

const App = () => {
  return (
    <div className='min-h-dvh overflow-hidden relative '>
      <Header />
      <body className='px-4 mb-20'>
        <div className='relative flex flex-col items-center z-10 gap-20'>
          <Introduction />
          <Skills />
          <Projects />
        </div>
      </body>
      <footer className='bottom-0 w-full text-center py-[60px] bg-[#242424] text-primary flex flex-col gap-5 px-4'>
        <h1 className='text-primary text-center text-[40px] leading-10 traking-[-1.14px] font-bold'>
          Contact
        </h1>
        <p className='text-secondary text-pretty font-medium text-[16px] leading-[26px] tracking-normal'>
          I would love to hear about your project and how I could help. Please
          fill in the form, and I’ll get back to you as soon as possible.
        </p>
        <Input placeholder='Name' />
        <Input placeholder='Email' />
        <textarea
          placeholder='Message'
          className='min-h-[107px] border-b-2 border-white w-full bg-transparent p-2 uppercase placeholder:uppercase placeholder:pb-20 placeholder:border-red-300 placeholder:border-2 placeholder:tracking-[-0.22px] placeholder:leading-[26px] placeholder:text-[16px] placeholder:opacity-50 placeholder:text-secondary placeholder:font-medium  ring-0 focus:ring-0 focus:outline-none focus:border-accent focus:border-b-2 text-primary text-[16px] leading-[26px] font-medium required:border-b-2 required:border-error disabled:border-b-2 disabled:border-error no-scrollbar'
        />
        <Button className='w-fit block ml-auto '>Send Message</Button>
        <div className='w-full border-t-2 border-primary mt-[68px] pt-9'>
          <Navbar />
        </div>
      </footer>
    </div>
  );
};

export default App;
