"use server";

import { musicApiSlice } from "@/setup/redux/query/musicApiSlice";
import { store } from "@/setup/redux/store";
import type { Music } from "./types/music";
import MusicList from "@/components/MusicsList";

const fetchRTKMusics = async (querySearch?: string) => {
  const musics = (
    await store.dispatch(musicApiSlice.endpoints.getAllMusics.initiate(""))
  )?.data;
  return musics;
};

export const fetchMusics = async () => {
  const musics: Music[] | undefined = await fetchRTKMusics();

  return <MusicList musics={musics} />;
};
