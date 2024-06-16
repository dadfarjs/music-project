"use client";

import { useDispatch, useSelector } from "react-redux";
import { Music } from "@/app/types/music";

import { setFilterMusic, setMusics } from "@/setup/redux/slices/musicSlice";

import dynamic from "next/dynamic";
import { Input } from "@headlessui/react";
import { RootState } from "@/setup/redux/store";
import { useEffect } from "react";

const DynamicMusicCard = dynamic(() => import("../components/MusicCard"), {
  loading: () => <p className="text-center p-8">Loading...</p>,
});

const MusicList = ({ musics }: Music[] | undefined) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch) {
      dispatch(setMusics({ musics }));
    }
  }, [dispatch, musics]);
  const filteredMusics: Music[] = useSelector<RootState>(
    ({ musicSlice }) => musicSlice.filteredMusics
  ) as Music[];

  const handleInputFilterMusic = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(setFilterMusic(event.target.value));
  };
  return (
    <>
      <div className="w-full max-w-md p-8">
        <Input
          name="search"
          type="text"
          placeholder="Search"
          data-focus
          data-hover
          onChange={handleInputFilterMusic}
          className="block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full max-w-5xl mx-auto gap-10 py-10 px-10">
        {filteredMusics?.map((item: Music, index: number) => (
          <DynamicMusicCard key={item.id} music={item} index={index} />
        ))}
      </div>
    </>
  );
};

export default MusicList;
