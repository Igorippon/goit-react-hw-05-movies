import { getMovieDetailsCredits } from "api";
import { Loader } from "components/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { List } from "./Cats.styled";

export default function Cast() {

    const [loader, setLoader] = useState(false);
    const [error, setError] = useState(false);
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

    useEffect(() => {
        const controller = new AbortController();
        async function getCast() {
            try {
                setLoader(true);
                setError(false);
                const { cast } = await getMovieDetailsCredits(movieId, { signal: controller.signal, });
                setCast(cast);
            } catch (error) {
                setError(true);
                toast.error('Oops... something went wrong, please reload the page!');
            } finally {
                setLoader(false);
            };
        };
        getCast();
        return () => { controller.abort(); };
    }, [movieId]);

    return (
        <>
            {loader && <Loader />}
            {!error && <List>
                {cast.map(({ name, profile_path, id }) =>
                (
                    <li key={id}>
                        <img src={profile_path ? `https://image.tmdb.org/t/p/w500/${profile_path}` : defaultImg} alt="name" width={150} height={93}></img>
                        <h5>{name}</h5>
                    </li>
                ))}
            </List>}
        </>
    );
};