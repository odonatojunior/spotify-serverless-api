import axios from 'axios'
import config from '../config/spotify'
import { SpotifyRefreshToken } from '../types/spotify'

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const basicAuthBuffer = Buffer.from(
  `${config.client_id}:${config.client_secret}`
).toString('base64')

export default async function getNewToken() {
  const options = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: config.refresh_token as string,
  })

  const { data } = await axios<SpotifyRefreshToken>(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuthBuffer}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: options,
  })

  return data
}
