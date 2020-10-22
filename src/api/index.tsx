import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://intense-falls-10186.herokuapp.com',
});
