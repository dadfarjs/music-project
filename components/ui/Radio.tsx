import React from 'react';
import { Radio as RadioHeadless, RadioProps } from '@headlessui/react';

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(({ ...props }, ref) => {
  return (
    <RadioHeadless
      ref={ref}
      {...props}
      className='group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400'
    >
      <span className='invisible size-2 rounded-full bg-white group-data-[checked]:visible' />
    </RadioHeadless>
  );
});
Radio.displayName = 'Input';
