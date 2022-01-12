import axios from 'axios';
import {environment} from '../../environment/environment';

export const movieDB = axios.create({
  baseURL: environment.apiUrl,
  params: {
    api_key: environment.apiKey,
    language: 'es-ES',
  },
});
