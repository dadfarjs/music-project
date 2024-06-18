import mongoose from 'mongoose';

export const ConnectDB = async () => {
  await mongoose.connect('mongodb://localhost:27017/musics');
  console.log(`the db is connect with ${mongoose.connection.host}`);
};
