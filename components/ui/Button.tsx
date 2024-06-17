import React from 'react';

export interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

import { Button as ButtonHeadless, ButtonProps } from '@headlessui/react';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, ...props }, ref) => {
    return (
      <ButtonHeadless
        type={type}
        ref={ref}
        {...props}
        className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Save changes
      </ButtonHeadless>
    );
  },
);
Button.displayName = 'Button';
