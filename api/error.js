export default function(_, response) {
  response.status(404).redirect('https://http.cat/404')
}