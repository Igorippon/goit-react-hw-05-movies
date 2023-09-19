import { getHome } from "api";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (movies.length > 0) {
            return
        };
        const controller = new AbortController();
        async function getHomeMovie() {
            try {
                setLoader(true);
                const { results } = await getHome({ signal: controller.signal, });
                setMovies(results);
            } catch (error) {
                if (error.code !== 'ERR_CANCELED') {
                    toast.error('Oops... something went wrong, please reload the page!');
                }

            } finally {
                setLoader(false);
            };
        };
        getHomeMovie();
        return () => {
            controller.abort();
        };
    }, [movies]);

    return (
        <>
            <h2 style={{ padding: '20px 20px 0px 20px' }}>Trending today</h2>
            {loader && <Loader />}
            {movies.length > 0 && <MoviesList movies={movies} />}
        </>
    );
};