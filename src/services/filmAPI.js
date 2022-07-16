import axios from 'axios';
// const KEY = '0511407effa2ffe16d4a1629eed8759a';
const BASE_URL = 'https://api.themoviedb.org/3';

const KEY = '306e564986f0782b8ec4bf227b0f3c28';
// 'https://api.themoviedb.org/3/movie/550?api_key=0511407effa2ffe16d4a1629eed8759a';
export const movieDayAPI = async () => {
  try {
    return await axios
      .get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
      .then(response => response.data);
  } catch (error) {
    console.error(error);
  }
};

export const movieSearchAPI = async (query = '') => {
  try {
    return await axios
      .get(`${BASE_URL}/search/movie/?api_key=${KEY}&query=${query}&page=1`)
      .then(response => response.data);
  } catch (error) {
    console.error(error);
  }
};
export const movieDetailsAPI = async id => {
  try {
    return await axios
      .get(`${BASE_URL}/movie/${id}?api_key=${KEY}`)
      .then(response => response.data);
  } catch (error) {
    console.error(error);
  }
};
export const movieCreditsAPI = async id => {
  try {
    return await axios
      .get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`)
      .then(response => response.data);
  } catch (error) {
    console.error(error);
  }
};
export const movieReviewsAPI = async id => {
  try {
    return await axios
      .get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`)
      .then(response => response.data);
  } catch (error) {
    console.error(error);
  }
};
