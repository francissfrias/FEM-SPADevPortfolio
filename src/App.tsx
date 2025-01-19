import { Button } from './components/Button';
import { Input } from './components/Input';

const App = () => {
  return (
    <div className='border border-white p-4 h-screen '>
      App
      <Input placeholder='Name' />
      <Button>Contact Me</Button>
    </div>
  );
};

export default App;
