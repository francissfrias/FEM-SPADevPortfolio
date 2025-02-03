import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import Navbar from './ui/Navbar';
import ringpattern from '/images/pattern-rings.svg';

const messageForm = z.object({
  name: z
    .string({
      required_error: 'Sorry, name is required',
    })
    .min(2, {
      message: 'Sorry, name should be more than 2 letters',
    }),
  email: z.string().email({
    message: 'Sorry, invalid email format here',
  }),
  message: z.string().optional(),
});

type messageInterface = z.infer<typeof messageForm>;

const messageInitialState = {
  name: '',
  email: '',
  message: '',
};

const Footer = () => {
  const form = useForm({
    mode: 'onChange',
    resolver: zodResolver(messageForm),
    defaultValues: messageInitialState,
  });

  const { errors } = form.formState;

  const handleSubmit = (data: messageInterface) => {
    console.log(data);
  };

  return (
    <footer className='bottom-0 w-full text-center py-[60px] bg-[#242424] text-primary  relative px-4 md:pb-4'>
      <div className='flex flex-col gap-5 md:px-[146px] '>
        <img
          className='absolute  bottom-0 left-0 z-0 -translate-x-[11.75rem] -translate-y-[290px] md:-translate-y-[145px] md:-translate-x-[370px]  '
          src={ringpattern}
        />
        <div className='flex flex-col gap-5 '>
          <h1 className='text-primary text-center text-[40px] leading-10 traking-[-1.14px] font-bold md:text-[72px] md:leading-[72px] md:tracking-[-2.05px]'>
            Contact
          </h1>
          <p className='text-secondary text-pretty font-medium text-[16px] leading-[26px] tracking-normal'>
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <form {...form} onSubmit={form.handleSubmit(handleSubmit)}>
          <div className='flex flex-col gap-8 '>
            <Input
              placeholder='Name'
              error={errors.name}
              {...form.register('name')}
            />
            <Input
              placeholder='Email'
              error={errors.email}
              {...form.register('email')}
            />
            <textarea
              placeholder='Message'
              className='min-h-[107px] border-b-2 border-white w-full bg-transparent p-2 uppercase placeholder:uppercase placeholder:pb-20 placeholder:border-red-300 placeholder:border-2 placeholder:tracking-[-0.22px] placeholder:leading-[26px] placeholder:text-[16px] placeholder:opacity-50 placeholder:text-secondary placeholder:font-medium placeholder:pl-3 ring-0 focus:ring-0 focus:outline-none focus:border-accent focus:border-b-2 text-primary text-[16px] leading-[26px] font-medium required:border-b-2 required:border-error disabled:border-b-2 disabled:border-error no-scrollbar'
              {...form.register('message')}
            />

            <Button className='w-fit block ml-auto ' type='submit'>
              Send Message
            </Button>
          </div>
        </form>
      </div>
      <div className='w-full border-t-2 border-primary mt-[68px] pt-9 md:mt-[105px] md:pt-[30px]'>
        <Navbar />
      </div>
    </footer>
  );
};

export default Footer;
