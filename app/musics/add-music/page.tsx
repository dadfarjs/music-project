'use client';

import FormMusic from './FormMusic';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MusicSchema, musicSchema } from '@/types/musicSchema';

const MusicAddForm = () => {
  const methods = useForm<MusicSchema>({
    mode: 'all',
    resolver: zodResolver(musicSchema),
  });

  return (
    <FormProvider {...methods}>
      <FormMusic />
    </FormProvider>
  );
};

export default MusicAddForm;
