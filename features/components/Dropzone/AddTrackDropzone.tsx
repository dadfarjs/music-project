'use client';

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const AddTrackDropzone = () => {
  const [file, setFile] = useState<string | null>(null);
  const [fileType, setFileType] = useState<string | null>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64String = e.target?.result as string;
        setFile(base64String);
        setFileType(file.type);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'audio/mp3': ['.mp3'],
    },
  });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {file && fileType?.startsWith('audio/') ? (
        <audio src={file} controls style={{ width: '100%' }} />
      ) : (
        <p>Drop an audio file here, or click to select one</p>
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

export default AddTrackDropzone;
