import { getMuvieDetails } from "api";
import { Loader } from "components/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function MovieDetails() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [overview, setOverview] = useState('');
    const [image, setImage] = useState('');
    const [genres, setGenres] = useState([]);
    const [loader, setLoader] = useState(false);

    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) {
            return
        };
        async function getMuvie() {
            try {
                setLoader(true);
                const { title, release_date, overview, genres, poster_path
                } = await getMuvieDetails(movieId);
                setTitle(title);
                setDate(release_date.slice(0, 4));
                setOverview(overview);
                setImage(poster_path);
                setGenres(genres.map(genre => genre.name));
            } catch (error) {
                toast.error('Oops... something went wrong, please reload the page!');
            } finally {
                setLoader(false);
            };
        };
        getMuvie();
    }, [movieId]);

    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

    return (
        <>
            {loader && <Loader />}
            <h3>{title}<span>({date})</span></h3>
            <p>{genres.join(" ")}</p>
            <img src={image ? `https://image.tmdb.org/t/p/w500/${image}` : defaultImg} width={250} alt={title}></img>
            <p>{overview}</p>
        </>
    );
};