'use client';

import { useDispatch, useSelector } from 'react-redux';
import { Music } from '@/types/music';

import { setFilterMusic, setMusics } from '@/setup/redux/slices/musicSlice';

import dynamic from 'next/dynamic';
import { RootState } from '@/setup/redux/store';
import { useEffect } from 'react';
import { Input } from '../ui/Input';

const DynamicMusicCard = dynamic(() => import('../Card/MusicCard'), {
  loading: () => <p className="p-8 text-center">Loading...</p>,
});

const MusicList = ({ musics }: Music[] | undefined) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(setMusics({ musics }));
    }
  }, [dispatch, musics]);
  const filteredMusics: Music[] = useSelector<RootState>(
    ({ musicSlice }) => musicSlice.filteredMusics,
  ) as Music[];

  const handleInputFilterMusic = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterMusic(event.target.value));
  };
  return (
    <>
      <div className="w-full max-w-md p-8">
        <Input onChange={handleInputFilterMusic} placeholder="Search" name="search" />
      </div>
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-start gap-10 px-10 py-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredMusics?.map((item: Music, index: number) => (
          <DynamicMusicCard key={item.id} music={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default MusicList;
