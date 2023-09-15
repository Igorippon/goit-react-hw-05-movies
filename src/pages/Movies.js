
import { getSearchMovie } from "api";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";



export default function Movies() {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const handlerSubmitForm = (searchValue) => {
        setSearch(searchValue);
        // setRandomId(`${Date.now()}/${searchValue}`);
        // setPage(1);
        // setMovies([]);
        // setTotal(0);
    };

    // const handlerSubmit = (evt) => {
    //     evt.preventDefault();
    //     const { search } = evt.currentTarget;
    //     setSearch(search.value.trim());
    //     if (search === '') {
    //         toast.error('Please enter search words');
    //         return;
    //     }

    //     evt.target.reset();
    // };
    console.log(search);

    useEffect(() => {
        if (search === '') {
            return
        }
        async function getSearch() {
            try {
                //   setLoader(true);
                const { results } = await getSearchMovie(search);
                if (results.length === 0) {
                    toast.error('Nothing found for your request');
                    return;
                };
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
        getSearch();
    }, [search]);

    return (
        <>
            <Searchbar onSubmit={handlerSubmitForm} />
            <MoviesList movies={movies} />
        </>
    );
};