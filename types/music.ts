export interface Music {
  id: string;
  title: string;
  artist_name: string;
  track?: File;
  track_file?: string;
  image_link?: string;
  image?: File;
  album_name?: string;
}

export type FormMusic = Omit<Music, 'id'>;
