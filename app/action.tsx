'use server';

import { musicApiSlice } from '@/features/lib/redux/query/musicApiSlice';
import { store } from '@/features/lib/redux/store';
import type { Music } from '@/features/types/music';
import MusicList from '@/features/components/List/MusicsList';

const fetchRTKMusics = async () => {
  const musics = (await store.dispatch(musicApiSlice.endpoints.getAllMusics.initiate('')))?.data;
  return musics;
};

export const fetchMusics = async () => {
  const musics: Music[] | undefined = await fetchRTKMusics();

  return <MusicList musics={musics} />;
};
