import { Music } from "@/app/types/music";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface MuscisState {
  allMusics: Music[];
  filteredMusics: Music[];
}

const initialState: MuscisState = {
  allMusics: [] as Music[],
  filteredMusics: [] as Music[],
};

const musicSlice = createSlice({
  name: "musicSliceName",
  initialState: initialState,
  reducers: {
    startCall: (state) => {
      state.allMusics = [] as Music[];
      state.filteredMusics = [] as Music[];
    },
    setMusics(state, action) {
      state.allMusics = action.payload?.musics ?? ([] as Music[]);
      state.filteredMusics = action.payload?.musics ?? ([] as Music[]);
    },
    setFilterMusic(state, action: PayloadAction<string>) {
      const searchTerm = action.payload.toLowerCase();
      const filteredMusics = state.allMusics.filter((music) =>
        music.title.toLowerCase().includes(searchTerm)
      );
      state.filteredMusics = filteredMusics;
    },
  },
});

export const { setMusics, setFilterMusic } = musicSlice.actions;

export default musicSlice.reducer;
