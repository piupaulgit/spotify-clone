// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const spotifyApis = createApi({
//     reducerPath: 'spotifyApis',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'http://localhost:3001/',
//     }),
//     endpoints: (builder) => ({
//         login: builder.query({ query: () => 'login' })
//     })
// })

// export const {
//     useLoginQuery
//   } = spotifyApis;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const spotifyApis = createApi({
  reducerPath: 'spotifyApis',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers) => {

      return headers;
    },
  }),
  endpoints: (builder) => ({
    loginUser: builder.query({ query: () => 'test' })
  }),
});

export const {
  useLoginUserQuery
} = spotifyApis;