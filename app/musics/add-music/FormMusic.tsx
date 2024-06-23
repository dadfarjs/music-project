'use client';

import { Button, Input } from '@/components';
import RadioField from '@/components/ui/RadioField';
import { FormMusic as FormMusicType } from '@/types/music';
import { RadioGroup } from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { SubmitHandler, useForm } from 'react-hook-form';

import { default as NextImage } from 'next/image';

const FormMusic = () => {
  const methods = useForm<FormMusicType>();
  const route = useRouter();

  const [selected, setSelected] = useState<string>('track_link');
  const [file, setFile] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

  const handleCreateFormSubmit: SubmitHandler<FormMusicType> = async (data) => {
    // await createTodoMutation.mutate(data);
    await methods.reset();
  };

  const handleRotePage = () => {
    route.push('/musics');
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        setFile(base64String);
        setFileType(file.type);

        if (file.type.includes('image/')) {
          const img = new Image();
          img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
          };
          img.src = base64String;
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png'],
      'image/jpg': ['.jpg'],
      'image/jpeg': ['.jpeg'],
      'audio/mp3': ['.mp3'],
      'application/pdf': ['.pdf'],
    },
  });

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
            <div {...getRootProps()} style={dropzoneStyle}>
              <input {...getInputProps()} />
              {file ? (
                fileType?.startsWith('image') && dimensions ? (
                  <NextImage
                    src={file}
                    alt='Selected'
                    width={dimensions.width}
                    height={dimensions.height}
                    style={{ borderRadius: '.5rem', maxHeight: 300 }}
                  />
                ) : fileType?.startsWith('video/') ? (
                  <video width='320' height='240' aria-label='Video player' controls preload='none'>
                    <source src={file} type='video/mp4' />
                    Your browser does not support the video tag.
                  </video>
                ) : // <video src={file} controls style={{ maxHeight: 300 }} />
                fileType?.startsWith('audio/') ? (
                  <audio src={file} controls style={{ width: '100%' }} />
                ) : (
                  <embed src={file} type='application/pdf' width='100%' height='600px' />
                )
              ) : (
                <p>Drop an image, video or audio file here, or click to select one</p>
              )}
            </div>
            // <Input type='file' placeholder='Select a music file' {...methods.register('track')} />
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

const dropzoneStyle = {
  border: '2px dashed #0087F7',
  borderRadius: '5px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default FormMusic;
