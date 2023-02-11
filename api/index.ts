import axios, { AxiosRequestConfig } from 'axios'
import type { VercelRequest, VercelResponse } from '@vercel/node'
import {
  CustomSpotifyApiResponse,
  SpotifyItem,
  SpotifyResponse,
} from './lib/types/spotify'
import getNewToken from './lib/auth'

const RECENTLY_PLAYED_ENDPOINT =
  'https://api.spotify.com/v1/me/player/recently-played'

export default async function (
  request: VercelRequest,
  response: VercelResponse
) {
  const { access_token } = await getNewToken()
  const axiosConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    params: {
      limit: request.query?.limit || 5,
    },
  }

  const { data } = await axios<SpotifyResponse<SpotifyItem>>(
    RECENTLY_PLAYED_ENDPOINT,
    axiosConfig
  )

  const albums = data.items.map(({ track }): CustomSpotifyApiResponse => {
    return {
      name: track.name,
      artists: track.artists.map((artist) => artist.name),
      album: track.album.name,
      cover: track.album.images,
    }
  })

  response.status(200).json(albums)
}
