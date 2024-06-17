'use client';

import { Button, Input } from '@/components';
import { useForm } from 'react-hook-form';

const MusicAddForm = () => {
  const { register } = useForm();
  return (
    <form className="mx-auto flex max-w-lg flex-col items-center space-y-4 p-10">
      <Input placeholder="Title Name" {...register('title')} />
      <Input placeholder="Artist Name" {...register('artist_name')} />
      <Input placeholder="Album Name" {...register('album_name')} />

      <Button className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white">
        Confirm
      </Button>

      <Button className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
        Save changes
      </Button>
    </form>
  );
};

export default MusicAddForm;
