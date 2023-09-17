import PropTypes from 'prop-types';
import { Button, Form, Header, Input } from "./Searchbar.styled"
import { FcSearch } from 'react-icons/fc';
import toast from 'react-hot-toast';
// import { useSearchParams } from 'react-router-dom';

export const Searchbar = ({ onSubmit }) => {
    // const [setSearchParams] = useSearchParams();
    // console.log(useSearchParams())
    // const query = searchParams.get('query');

    const handlerSubmit = (evt) => {
        evt.preventDefault();
        const { search } = evt.currentTarget;
        const searchValue = search.value.trim();
        if (searchValue === '') {
            toast.error('Please enter search words');
            return;
        }
        // setSearchParams({ query: searchValue })
        onSubmit(searchValue);
        evt.target.reset();

    };

    return (
        <Header>
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
        </Header>
    );
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};