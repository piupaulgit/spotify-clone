import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentIndex: 0,
  isActive: false,
  activeSong: {},
  genreListId: '',

  songList:[],
  currentSong:{},
  currentSongIndex:0,
  isPlaying:false,
  isActive:false,
  activeAlbumId: ''
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSongList:(state,action) =>{
      state.songList = action.payload.tracks.items;
      state.activeAlbumId = action.payload.id
    },

    setCurrentSong:(state,action) => {
      state.currentSong = action.payload;
      state.currentSongIndex = action.payload.track_number;
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

export const {prevSong, playPause, selectGenreListId,setCurrentSong,setSongList } = playerSlice.actions;

export default playerSlice.reducer;
