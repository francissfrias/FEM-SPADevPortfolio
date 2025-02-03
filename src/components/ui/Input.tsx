import * as React from 'react';
import { FieldError } from 'react-hook-form';
import errorIcon from '../../../public/images/errorsvg.svg';
import { cn } from '../../helper/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError | undefined;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className='relative'>
        <input
          aria-label='input'
          type={type}
          className={cn(
            'min-h-[43px] border-b-2 border-white w-full bg-transparent p-2 uppercase placeholder:uppercase placeholder:pb-20 placeholder:border-red-300 placeholder:border-2 placeholder:tracking-[-0.22px] placeholder:leading-[26px] placeholder:text-[16px] placeholder:opacity-50 placeholder:text-secondary placeholder:font-medium placeholder:pl-3 ring-0 focus:ring-0 focus:outline-none focus:border-accent focus:border-b-2 text-primary text-[16px] leading-[26px] font-medium required:border-b-2 required:border-error disabled:border-b-2 disabled:border-error  ',
            error?.message && 'border-error',
            className
          )}
          ref={ref}
          {...props}
        />
        {error?.message && (
          <>
            <p className='text-error text-[12px] text-medium leading-4 tracking-[-0.17px] text-right mt-1.5'>
              {error?.message}
            </p>
            <img src={errorIcon} className='absolute right-0 top-0 ' />
          </>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
