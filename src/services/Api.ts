import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://plannoapi.azurewebsites.net/',
});

export default Api;
