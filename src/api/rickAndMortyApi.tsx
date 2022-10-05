import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api';

const rickAndMortyApi = axios.create({
  baseURL,
});

export default rickAndMortyApi;
