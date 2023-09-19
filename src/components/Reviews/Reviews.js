import { getMovieDetailsReviews } from "api";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { P, Review } from "./Reviews.styled";

export const Reviews = () => {
    const [loader, setLoader] = useState(false);
    // const [error, setError] = useState(false);
    const [review, setReview] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        async function getReviews() {
            try {
                setLoader(true);
                // setError(false);
                const { results
                } = await getMovieDetailsReviews(movieId);
                setReview(results.map(result => result.content)
                );
                console.log(results.map(result => result.content)

                );
            } catch (error) {
                // setError(true);
                toast.error('Oops... something went wrong, please reload the page!');
            } finally {
                setLoader(false);
            };
        }
        getReviews();
    }, [movieId]);

    return (
        <>
            <Review>{review}</Review>
            {review.length === 0 && <P>There are no reviews for this movie</P>}
            {loader && <Loader />}
        </>
    )
}