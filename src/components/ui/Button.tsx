import React, { forwardRef } from 'react';
import { cn } from '../../helper/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, className, ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          'w-[120px] h-[38px]  text-primary border-b-2 border-accent uppercase tracking-[2.29px] text-[16px] leading-[26px] font-bold hover:text-accent ',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };
