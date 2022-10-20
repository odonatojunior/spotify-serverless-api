import axios from 'axios';

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basicAuthBuffer = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const RECENTLY_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played'
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`


export default async function(request, response) {
  const { access_token } = await getNewToken()

  const { data } = await axios(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      "Authorization": `Bearer ${access_token}`
    },
    params: {
      limit: 5
    }
  })

  // gambiarra da desgraça pra parsear o json rapaz
  const albums = data.items.map(({ track }) => {
    return {
      name: track.name,
      album: track.album.name,
      cover: track.album.images[0].url,
      artist: track.artists[0].name
    }
  })

  response.status(200).json(albums)
  
}

async function getNewToken() {

  const options = new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token
  })

  const { data } = await axios(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      "Authorization": `Basic ${basicAuthBuffer}`,
      "Content-Type": 'application/x-www-form-urlencoded'
    },
    data: options
  })

  return data
}