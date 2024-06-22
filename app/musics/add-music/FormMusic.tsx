'use client';

import { Button, Input } from '@/components';
import RadioField from '@/components/ui/RadioField';
import { FormMusic as FormMusicType } from '@/types/music';
import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const FormMusic = () => {
  const methods = useForm<FormMusicType>();
  const route = useRouter();

  let [selected, setSelected] = useState<string>('track_link');

  const handleCreateFormSubmit: SubmitHandler<FormMusicType> = async (data) => {
    // await createTodoMutation.mutate(data);
    await methods.reset();
  };

  const handleRotePage = () => {
    route.push('/musics');
  };
  return (
    <form
      onSubmit={methods.handleSubmit(handleCreateFormSubmit)}
      className='mx-auto flex max-w-lg flex-col items-center space-y-5 p-10'
    >
      <Input placeholder='Title Name' {...methods.register('title')} />
      <Input placeholder='Artist Name' {...methods.register('artist_name')} />
      <Input placeholder='Album Name' {...methods.register('album_name')} />

      <div className='flex w-full flex-col space-y-2 text-start'>
        <span className='text-sm/4'>Track:</span>
        <RadioGroup
          value={selected}
          onChange={setSelected}
          aria-label='Track Type'
          className='flex flex-row space-x-5 ps-2'
        >
          <RadioField value='track_link' label='Track link' />
          <RadioField value='track_file' label='Track file' />
        </RadioGroup>
        <div className='pt-3'>
          {selected === 'track_link' && (
            <Input
              type='url'
              placeholder='Enter a address music'
              {...methods.register('track_link')}
            />
          )}
          {selected === 'track_file' && (
            <Input type='file' placeholder='Select a music file' {...methods.register('track')} />
          )}
        </div>
      </div>

      <div className='flex flex-row-reverse gap-5'>
        <Button
          type='submit'
          className='rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white'
        >
          Confirm
        </Button>
        <Button
          onClick={handleRotePage}
          className='inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'
        >
          Back
        </Button>
      </div>
    </form>
  );
};

export default FormMusic;
