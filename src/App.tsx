import Footer from './components/Footer';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='min-h-dvh overflow-hidden relative '>
      <Header />
      <body className='px-4 mb-20 md:px-[30px]'>
        <div className='relative flex flex-col items-center z-10 gap-20'>
          <Introduction />
          <Skills />
          <Projects />
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default App;
