# SPOTIFY SERVERLESS API

## Contexto
Me preparando para um outro projeto que estou iniciando relacionado a música veio a vontade de testar como funciona a API do Spotify, Javascript e serverless functions.

Como alguns processos de conseguir as permissões do Spotify foram na base de tentativa, erro e leitura da documentação algumas partes importantes do funcionamento não foram implementadas por aqui

Por isso recomendo ler toda a [documentação da autorização da API do Spotify](https://developer.spotify.com/documentation/general/guides/authorization/) (que foi algo que eu não fiz a princípio 🙄) 

## A fazer
- [x] Consultar os dados da API e retornar as últimas músicas ouvidas
- [ ] Adicionar a leitura dos parâmetros ```limit``` e ```after``` na API
- [ ] Separar as rotas em ```currently_playing``` e ```last_played```
- [ ] [Cache](https://vercel.com/docs/concepts/functions/serverless-functions/edge-caching) nas consultas da API