import { fetchMusics } from '../action';

const Musics = async () => {
  const data = await fetchMusics();

  return (
    <main className="mx-auto flex max-w-5xl flex-col items-center justify-center">{data}</main>
  );
};

export default Musics;
