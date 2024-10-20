import axios from 'axios';

const API_URL = 'http://localhost:3000/movies';

export async function getMovies() {
  const response = await axios.get(API_URL);
  return response.data;
}
