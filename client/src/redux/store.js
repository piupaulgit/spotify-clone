import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { spotifyCoreApi } from './services/spotifyCore';

export const store = configureStore({
  reducer: {
    [spotifyCoreApi.reducerPath]: spotifyCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (defaultMiddleware) =>  defaultMiddleware().concat(spotifyCoreApi.middleware) 
});
