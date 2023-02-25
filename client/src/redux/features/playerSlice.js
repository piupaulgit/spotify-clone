import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songList: [],
  currentSong: {},
  currentSongIndex: 0,
  isPlaying: false,
  isActive: false,
  activeAlbumId: ''
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong:(state,action) => {
      debugger
      state.currentSong = action.payload.song;
      state.currentSongIndex = action.payload.song.track_number;
      state.songList = action.payload.albumDetail.tracks.items;
      state.activeAlbumId = action.payload.albumDetail.id
      state.isPlaying = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const {prevSong, playPause, selectGenreListId,setCurrentSong } = playerSlice.actions;

export default playerSlice.reducer;
