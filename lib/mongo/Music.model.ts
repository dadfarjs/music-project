import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  artist_name: {
    type: String,
    required: true,
    trim: true,
  },
  album_name: {
    type: String,
    required: true,
    trim: true,
  },
  id: {
    type: String,
    required: true,
    trim: true,
  },
});

export const MusicModel = mongoose.models.music || mongoose.model('music', Schema);
