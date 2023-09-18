import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../types'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimsGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightersGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetSoonQuery,
  useGetOnSaleQuery,
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimsGamesQuery,
  useGetFightersGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery
} = api
export default api
