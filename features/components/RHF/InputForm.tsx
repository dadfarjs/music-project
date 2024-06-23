import { Input } from '@headlessui/react';
import React, { memo } from 'react';
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

type Props = {
  typeInput?: string;
  nameInput: string;
  message?: string;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
};

export const InputForm = memo(
  ({
    typeInput = 'text',
    nameInput,
    register,
    formState: { isLoading, isSubmitted, errors, isDirty },
  }: Props) => (
    <div>
      <Input disabled={isLoading && isSubmitted} type={typeInput} {...register(nameInput)} />
      {errors && <p>errors</p>}
      {isDirty && <p>This field is dirty</p>}
    </div>
  ),
  (prevProps, nextProps) => prevProps.formState.isDirty === nextProps.formState.isDirty,
);

InputForm.displayName = 'InputForm';
