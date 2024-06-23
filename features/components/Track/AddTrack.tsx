'use client';

import { Input } from '@/features/components';
import RadioField from '@/features/components/ui/RadioField';
import { FormMusic as FormMusicType } from '@/features/types/music';
import { RadioGroup } from '@headlessui/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AddTrackDropzone from '../Dropzone/AddTrackDropzone';

const AddTrack = () => {
  const methods = useForm<FormMusicType>();

  const [selected, setSelected] = useState<string>('track_link');

  return (
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
        {selected === 'track_file' && <AddTrackDropzone />}
      </div>
    </div>
  );
};

export default AddTrack;
