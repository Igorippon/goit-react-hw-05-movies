import { getMovieDetailsReviews } from "api";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { P, Review } from "./Reviews.styled";

export default function Reviews() {
    const [loader, setLoader] = useState(false);
    const [review, setReview] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        async function getReviews() {
            try {
                setLoader(true);
                const { results
                } = await getMovieDetailsReviews(movieId, { signal: controller.signal, });
                setReview(results.map(result => result.content));

            } catch (error) {
                toast.error('Oops... something went wrong, please reload the page!');
            } finally {
                setLoader(false);
            };
        }
        getReviews();
        return () => { controller.abort(); };
    }, [movieId]);

    return (
        <>
            <Review>{review}</Review>
            {review.length === 0 && <P>There are no reviews for this movie</P>}
            {loader && <Loader />}
        </>
    );
};