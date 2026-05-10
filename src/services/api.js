import axios from 'axios';

// BASE URL DA API - https://api.themoviedb.org/3
//URL DA API: /movie/now_playing?api_key=c648c30115cefc83e67386b5b463653e&language=pt-BR

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default api;