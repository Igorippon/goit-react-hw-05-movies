import { getMovieDetails } from "api";
import { Loader } from "components/Loader/Loader";
import { MovieItem } from "components/MovieItem/MovieItem";
import { Suspense, useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Outlet, useParams } from "react-router-dom";

export default function MovieDetails() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [overview, setOverview] = useState('');
    const [image, setImage] = useState('');
    const [genres, setGenres] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [score, setScore] = useState('');
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
            return
        };
        const controller = new AbortController();
        async function getMovie() {
            try {
                setLoader(true);
                setError(false);
                const { title, release_date, overview, genres, poster_path, vote_average } = await getMovieDetails(movieId, { signal: controller.signal, });
                setTitle(title);
                setDate(release_date.slice(0, 4));
                setOverview(overview);
                setImage(poster_path);
                setGenres(genres.map(genre => genre.name));
                setScore(Math.ceil(vote_average * 10));
            } catch (error) {
                setError(true);
                toast.error('Oops... something went wrong, please reload the page!');
            } finally {
                setLoader(false);
            };
        };
        getMovie();
        return () => {
            controller.abort();
        };
    }, [movieId]);

    return (
        <>
            {title && !error && <MovieItem
                title={title}
                date={date}
                overview={overview}
                image={image}
                genres={genres}
                score={score}
            />}
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
            {loader && <Loader />}
        </>
    );
};
