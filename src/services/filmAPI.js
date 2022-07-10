import axios from 'axios';
const KEY = '0511407effa2ffe16d4a1629eed8759a';
const BASE_URL = 'https://api.themoviedb.org/3';

// 'https://api.themoviedb.org/3/movie/550?api_key=0511407effa2ffe16d4a1629eed8759a';
export const movieDayAPI = () => {
  return axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
    .then(response => response.data);
};

export const movieSearchAPI = () => {
  return axios
    .get(`${BASE_URL}/search/movie/?api_key=${KEY}&query=Jack`)
    .then(response => response.data);
};
export const movieDetailsAPI = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${KEY}`)
    .then(response => response.data);
};
export const movieCreditsAPI = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/credits?api_key=${KEY}`)
    .then(response => response.data);
};
export const movieReviewsAPI = id => {
  return axios
    .get(`${BASE_URL}/movie/${id}/reviews?api_key=${KEY}`)
    .then(response => response.data);
};
