import { Button, Div, Form, Input } from "./Searchbar.styled"
import { FcSearch } from 'react-icons/fc';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

export const Searchbar = () => {
    const [searchParams, setSearchParams] = useSearchParams();

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
        evt.target.reset();

    };

    return (
        <Div>
            <Form onSubmit={handlerSubmit}>
                <Button type="submit" >
                    <FcSearch />
                </Button>
                <Input
                    type="text"
                    name="search"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                />

            </Form>
        </Div>
    );
};

