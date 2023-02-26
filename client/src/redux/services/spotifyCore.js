import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';

export const spotifyCoreApi = createApi({
  reducerPath: 'spotifyCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spotify.com/v1/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken")
      if(token){
        headers.set('authorization', `Bearer ${token}`)
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getPlayList: builder.query({ query: () => `browse/new-releases?country=IN&limit=12` }),
    getAlbumDetails: builder.query({query: ({type,id}) => ({url:`${type}/${id}`})}),
  }),
});

export const {
  useGetPlayListQuery,
  useGetAlbumDetailsQuery
} = spotifyCoreApi;