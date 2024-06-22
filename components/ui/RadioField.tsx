import React, { FC } from 'react';
import { Field, Label } from '@headlessui/react';
import { Radio } from './Radio';

interface RadioFieldProps {
  value: string;
  label: string;
}

export const RadioField: FC<RadioFieldProps> = ({ value, label, ...props }) => {
  return (
    <Field className='flex items-center gap-2'>
      <Radio
        value={value}
        {...props}
        className='group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400'
      >
        <span className='invisible size-2 rounded-full bg-white group-data-[checked]:visible' />
      </Radio>
      <Label>{label}</Label>
    </Field>
  );
};

export default RadioField;
