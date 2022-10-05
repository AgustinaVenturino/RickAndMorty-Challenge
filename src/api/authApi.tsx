import axios from 'axios';

const baseURL = 'https://razbaqr77h.execute-api.sa-east-1.amazonaws.com/prod';

const authApi = axios.create({
  baseURL,
  headers: {
    'x-api-key': '7HckdEx0dx67Kor9pPGAB7WtYCyd3r5J70Sp0smo ',
  },
});
export default authApi;
