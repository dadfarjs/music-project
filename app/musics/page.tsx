import { fetchMusics } from "../action";

const Musics = async () => {
  const data = await fetchMusics();

  return (
    <main className="flex flex-col justify-center items-center max-w-5xl mx-auto">
      {data}
    </main>
  );
};

export default Musics;
