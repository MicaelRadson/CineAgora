# Cine Agora

Projeto web de filmes desenvolvido em React.

## Sobre o projeto

O Cine Agora exibe uma lista de filmes em cartaz, permite abrir os detalhes de cada filme e salvar favoritos no navegador.

Principais funcionalidades:

- Listagem dos filmes em cartaz (now playing)
- Tela de detalhes com sinopse e nota
- Botao para abrir busca de trailer no YouTube
- Sistema de favoritos salvo no localStorage
- Pagina de erro para rotas inexistentes

## Tecnologias usadas

Este site foi feito com:

- React
- React Router DOM (navegacao entre paginas)
- Axios (consumo da API)
- React Toastify (mensagens de sucesso/erro)


## API utilizada

Os dados dos filmes sao obtidos da API do TMDB (The Movie Database):

- Base URL: https://api.themoviedb.org/3
- Endpoint principal usado: /movie/now_playing

O projeto usa a chave da API via variavel de ambiente:

- REACT_APP_API_KEY

## Como rodar o projeto

### 1. Clonar o repositorio

```bash
git clone <url-do-repositorio>
cd cine-agora
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variavel de ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteudo:

```env
REACT_APP_API_KEY=sua_chave_do_tmdb
```

Para obter a chave, crie uma conta no TMDB e gere sua API Key em:

https://www.themoviedb.org/settings/api

### 4. Executar em modo desenvolvimento

```bash
npm start
```


