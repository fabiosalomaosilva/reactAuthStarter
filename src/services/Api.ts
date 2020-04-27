import axios from 'axios';

const api = axios.create({
  baseURL: '{url da sua api}',
});

export default api;
