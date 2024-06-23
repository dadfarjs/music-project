export interface Music {
  id: string;
  title: string;
  artist_name: string;
  track?: File;
  track_link?: string;
  image?: File;
  image_link?: string;
  album_name?: string;
}

export type FormMusic = Omit<Music, 'id'>;
