import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '37314a167a558e9a6582597c5654a5d7';

const TREND_URL = `${BASE_URL}/trending/movie/week`;

export const getTrendingMovies = async () => {
   try {
      const { data } = await axios.get(
         `${TREND_URL}?api_key=${API_KEY}&page=1`
      );
      return data.results;
   } catch (error) {
      console.error(error.message);
   }
};

export const getGenreMovies = async () => {
   try {
      const {data} = await axios.get(
         `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
      );
      return data.genres;
   } catch (error) {
      console.error(error.message);
   }
};



export const getSearchMovies = async (query) => {
   try {
      const {data} = await axios.get(
         `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
      return data.results;
   } catch (error) {
      console.error(error.message);
   }
};

export const getDetailsMovie = async (movieId) => {
   try {
      const {data} = await axios.get(
         `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
         console.log(data)
      return data;
   } catch (error) {
      console.error(error.message);
   }
};


export const getActorsMovie = async (movieId) => {
   try {
      const {data} = await axios.get(
         `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
      return data;
   } catch (error) {
      console.error(error.message);
   }
};


export const getReviewsMovie = async (movieId) => {
   try {
      const {data} = await axios.get(
         `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
      return data.results;
   } catch (error) {
      console.error(error.message);
   }
};