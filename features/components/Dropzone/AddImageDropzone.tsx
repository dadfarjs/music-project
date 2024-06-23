'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

import { default as NextImage } from 'next/image';

const AddImageDropzone = () => {
  const [file, setFile] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number; height: number } | null>(null);

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
    },
  });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {file && fileType?.startsWith('image') && dimensions ? (
        <NextImage
          src={file}
          alt='Selected'
          width={dimensions.width}
          height={dimensions.height}
          style={{ borderRadius: '.5rem', maxHeight: 300 }}
        />
      ) : (
        <p>Drop an image file here, or click to select one</p>
      )}
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #0087F7',
  borderRadius: '5px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};

export default AddImageDropzone;
