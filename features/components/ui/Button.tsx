import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

import { Button as ButtonHeadless } from '@headlessui/react';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type, children, ...props }, ref) => {
    return (
      <ButtonHeadless type={type} ref={ref} {...props}>
        {children}
      </ButtonHeadless>
    );
  },
);
Button.displayName = 'Button';
