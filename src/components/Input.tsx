import * as React from 'react';
import { cn } from '../helper/utils';

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'min-h-[43px] border-b-2 border-secondary w-full bg-transparent p-2 placeholder:uppercase placeholder:pb-20 placeholder:border-red-300 placeholder:border-2 placeholder:tracking-[-0.22px] placeholder:leading-[26px] placeholder:font-medium  ring-0 focus:ring-0 focus:outline-none focus:border-accent focus:border-b-2 text-primary text-[16px] leading-[26px] font-medium',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
