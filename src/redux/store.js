import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import authReducer from './features/authSlice';
import { spotifyCoreApi } from './services/spotifyCore';
import { spotifyApis } from './services/spotifyApis';

export const store = configureStore({
  reducer: {
    [spotifyCoreApi.reducerPath]: spotifyCoreApi.reducer,
    [spotifyApis.reducerPath]:spotifyApis.reducer,
    player: playerReducer,
    auth: authReducer
  },
  middleware: (defaultMiddleware) =>  defaultMiddleware().concat(spotifyCoreApi.middleware) 
});

