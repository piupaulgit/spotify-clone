import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentSongs: [],
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

    nextSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      // state.currentIndex = action.payload;
      // state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      // state.currentIndex = action.payload;
      // state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { nextSong, prevSong, playPause, selectGenreListId,setCurrentSong,setSongList } = playerSlice.actions;

export default playerSlice.reducer;
