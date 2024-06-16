import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  music: {
    id: String,
    title: String,
    image: String,
    artist_name: String,
    album_name: String,
  },
});

export const MusicModel =
  mongoose.models.music || mongoose.model("music", Schema);
