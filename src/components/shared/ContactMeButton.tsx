import React, { forwardRef } from 'react';
import { cn } from '../../helper/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const ContactButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        type='button'
        className={cn(
          'w-[120px] h-[38px]  text-primary border-b-2 border-accent uppercase tracking-[2.29px] text-[16px] leading-[26px] font-bold hover:text-accent ',
          className
        )}
        ref={ref}
        {...props}
      >
        Contact Me
      </button>
    );
  }
);

ContactButton.displayName = 'ContactButton';

export { ContactButton };
