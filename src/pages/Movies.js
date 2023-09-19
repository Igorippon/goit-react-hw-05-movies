
import { getSearchMovie } from "api";
import { Button } from "components/Button/Button";
import { Loader } from "components/Loader/Loader";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Searchbar } from "components/Searchbar/Searchbar";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";


export default function Movies() {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('query');
    const pageUrl = searchParams.get('page');
    // const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [loader, setLoader] = useState(false);
    // const [randomId, setRandomId] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    // const [searchParams, setSearchParams] = useSearchParams();
    // const handlerSubmitForm = (searchValue) => {
    //     if (query === '') {
    //         return
    //     }
    //     setSearch(query);
    //     setRandomId(`${Date.now()}/${query}`);
    //     setPage(1);
    //     setMovies([]);
    //     setTotal(0);
    // };

    // handlerSubmitForm();
    console.log(pageUrl);
    console.log(search);


    useEffect(() => {
        if (!search) {
            return
        }
        const controller = new AbortController();
        if (pageUrl === '1') {
            setMovies([]);
            setTotal(0);
            // setPage(1);
        }
        // setSearch(query);
        // setRandomId(`${Date.now()}/${search}`);
        setPage(Number(pageUrl));
        // setMovies([]);
        // setTotal(0);

        async function getSearch() {
            try {
                setLoader(true);
                const { results, total_results, total_pages } = await getSearchMovie(search, page, { signal: controller.signal, });
                if (results.length === 0) {
                    toast.error('Nothing found for your request');
                    return;
                };
                if (page === 1) {
                    toast.success(`Hooray! We found ${total_results
                        } movies.`);
                }
                setMovies(prevMovies => [...prevMovies, ...results]);
                setTotal(total_pages);

            } catch (error) {
                toast.error('Oops... something went wrong, please reload the page!');
            } finally {
                setLoader(false);
            };
        };
        getSearch();
        return () => {
            controller.abort();
        };
    }, [page, search, pageUrl, searchParams, setSearchParams]);

    const handlerClickLoadMore = () => {
        setPage(prevPage => (prevPage + 1));
        console.log(page);
        searchParams.set('page', (page + 1));
        console.log(page);
        setSearchParams(searchParams);

    };

    return (
        <>
            {<Searchbar />}
            {movies.length > 0 && <MoviesList movies={movies} />}
            {loader && <Loader />}
            {movies.length > 0 && page < total && <Button onClick={handlerClickLoadMore} />}
        </>
    );
};