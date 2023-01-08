import type { VercelRequest, VercelResponse } from '@vercel/node'

export default function (_: VercelRequest, response: VercelResponse) {
  response.status(404).redirect('https://http.cat/404')
}
