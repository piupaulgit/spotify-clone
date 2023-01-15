import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://spotify23.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', '8cc6b60b92mshdd676676142eb96p1d16f8jsn62131edfe2c1');

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPlayList: builder.query({ query: () => 'playlist_tracks/?id=37i9dQZF1DX4Wsb4d7NKfP&offset=0&limit=100' })
  }),
});

export const {
  useGetPlayListQuery
} = spotifyCoreApi;