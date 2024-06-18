'use server';

import { musicApiSlice } from '@/lib/redux/query/musicApiSlice';
import { store } from '@/lib/redux/store';
import type { Music } from '@/types/music';
import MusicList from '@/components/List/MusicsList';

const fetchRTKMusics = async () => {
  const musics = (await store.dispatch(musicApiSlice.endpoints.getAllMusics.initiate('')))?.data;
  return musics;
};

export const fetchMusics = async () => {
  const musics: Music[] | undefined = await fetchRTKMusics();

  return <MusicList musics={musics} />;
};
