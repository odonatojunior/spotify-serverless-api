export type SpotifyResponse<T> = {
  items: T[]
  next: URL
  cursors: SpotifyCursors
  limit: number
  href: URL
}

export type SpotifyRefreshToken = {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  scope: string
}

export type SpotifyCursors = {
  after: Date
  before: Date
}

export type SpotifyExternalUrls = {
  spotify: string
}

export type SpotifyImages = {
  height: number
  url: URL
  width: number
}

export type SpotifyItem = {
  track: SpotifyTrack
  played_at: Date
  context: SpotifyContext
}

export type SpotifyContext = {
  external_urls: SpotifyExternalUrls
  href: URL
  type: 'album' | ''
  uri: string
}

export type SpotifyTrack = {
  album: SpotifyAlbum
  artists: SpotifyArtist[]
  available_markets: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  external_ids: {}
  external_urls: SpotifyExternalUrls
  href: URL
  id: string
  is_local: boolean
  name: string
  popularity: number
  preview_url: URL
  track_number: number
  type: 'track'
  uri: string
}

export type SpotifyAlbum = {
  album_type: 'album'
  artists: SpotifyArtist[]
  available_markets: string[]
  external_urls: SpotifyExternalUrls
  href: URL
  id: string
  images: SpotifyImages[]
  name: string
  release_date: Date
  release_date_precision: 'day' | 'week' | 'month'
  total_tracks: number
  type: 'album'
  uri: string
}

export type SpotifyArtist = {
  external_urls: SpotifyExternalUrls
  href: string
  id: string
  name: string
  type: 'artist'
  uri: string
}

export type CustomSpotifyApiResponse = {
  name: string
  artists: string[]
  cover: SpotifyImages[]
  album: string
}
