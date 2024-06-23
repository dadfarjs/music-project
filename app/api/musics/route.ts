import { NextResponse } from 'next/server';
import { ConnectDB } from '@/features/lib/mongo/db.config';
import { musics } from '@/features/constants/_data';
import { MusicModel } from '@/features/lib/mongo/Music.model';

ConnectDB();

export const GET = async () => {
  const AllMusics = await MusicModel.find({});
  console.log(AllMusics?.length);
  console.log(AllMusics);
  return NextResponse.json(musics);
};
