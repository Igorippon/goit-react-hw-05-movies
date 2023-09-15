import { getHome } from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { useEffect } from "react";
import { useState } from "react";



export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length > 0) {
            return
        };

        async function getHomeMovie() {
            try {
                //   setLoader(true);
                const { results } = await getHome();
                console.log(results);
                // if (totalHits === 0) {
                //     toast.error('Nothing found for your request');
                //     return;
                // };
                // if (page === 1) {
                //     toast.success(`Hooray! We found ${totalHits} images.`);
                // }
                setMovies(results);


                // setTotal(Math.ceil(totalHits / 12));
            } catch (error) {
                // toast.error('Oops... something went wrong, please reload the page!');
            } finally {
                // setLoader(false);
            };
        };
        getHomeMovie();
    }, [movies]);
    console.log(movies);
    return (
        <MoviesList movies={movies} />
    );
};