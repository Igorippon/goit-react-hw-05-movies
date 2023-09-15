import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org';

const API_KEY = '1ca0d7ad919e4440c63ef111a30e5b87'

export const getHome = async (searchQueryValue, page) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        // q: searchQueryValue,
        // image_type: 'photo',
        // orientation: 'orizontal',
        // safesearch: 'true',
        // per_page: '12',
        // page: page,
    });
    const { data } = await axios.get(`/3/trending/all/day?language=en-US&${params}`);
    return data;
};

export const getMovieDetails = async (movieId) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        // q: searchQueryValue,
        // image_type: 'photo',
        // orientation: 'orizontal',
        // safesearch: 'true',
        // per_page: '12',
        // page: page,
    });
    const { data } = await axios.get(`/3/movie/${movieId}?language=en-US&${params}`);
    return data;
};

export const getSearchMovie = async (search) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        // query: search,
        // image_type: 'photo',
        // orientation: 'orizontal',
        // safesearch: 'true',
        // per_page: '12',
        // page: page,
    });
    const { data } = await axios.get(`/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1&${params}`);
    return data;
};
// https://api.themoviedb.org/3/search/movie?query=war&include_adult=false&language=en-US&page=1