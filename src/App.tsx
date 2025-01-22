import Header from './components/Header';
import Introduction from './components/Introduction';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className='min-h-dvh overflow-hidden relative px-4 '>
      <Header />
      <div className='relative flex flex-col items-center z-10 gap-10 '>
        <Introduction />
        <Skills />
      </div>
    </div>
  );
};

export default App;
