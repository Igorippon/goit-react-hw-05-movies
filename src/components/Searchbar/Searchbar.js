// import PropTypes from 'prop-types';
import { Button, Div, Form, Input } from "./Searchbar.styled"
import { FcSearch } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // const query = searchParams.get('query') ?? '';
    //     console.log(setSearchParams);

    const handlerSubmit = (evt) => {
        evt.preventDefault();
        const { search } = evt.currentTarget;
        const searchValue = search.value.trim();
        if (searchValue === '') {
            toast.error('Please enter search words');
            return;
        }
        searchParams.set('query', searchValue);
        searchParams.set('page', 1)
        setSearchParams(searchParams);
        // onSubmit(searchValue);
        evt.target.reset();

    };


    // console.log(searchParams.getAll());
    console.log(useSearchParams());

    return (
        <Div>
            <Form onSubmit={handlerSubmit}>
                <Input
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                />
                <Button type="submit" >
                    <FcSearch />
                </Button>
            </Form>
        </Div>
    );
};

// Searchbar.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// };