import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '1ca0d7ad919e4440c63ef111a30e5b87';

const params = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
});

export const getHome = async () => {
    const { data } = await axios.get(`/trending/all/day?${params}`);
    return data;
};

export const getMovieDetails = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}?${params}`);
    return data;
};

export const getSearchMovie = async (search, page) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        query: search,
        language: 'en-US',
        page: page,
    });
    const { data } = await axios.get(`/search/movie?&include_adult=false&page=1&${params}`);
    return data;
};

export const getMovieDetailsCredits = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}/credits?${params}`);
    return data;
};

export const getMovieDetailsReviews = async (movieId) => {
    const { data } = await axios.get(`/movie/${movieId}/reviews?${params}`);
    return data;
};