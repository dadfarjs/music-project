"use client";

import { Music } from "@/app/types/music";
import { RootState } from "@/setup/redux/store";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const MusicPage = () => {
  const param = useParams();
  const router = useRouter();

  const musics: Music[] | undefined = useSelector(
    (state: RootState) => state.musicSlice.allMusics
  );

  useEffect(() => {
    musics?.length === 0 && router.push("/musics");
  }, [musics]);

  return <pre>{JSON.stringify(musics?.[Number(param.id)])}</pre>;
};

export default MusicPage;
