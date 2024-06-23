import React from 'react';
import { Input as InputHeadless } from '@headlessui/react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', ...props }, ref) => {
    return (
      <InputHeadless
        type={type}
        className='block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';
