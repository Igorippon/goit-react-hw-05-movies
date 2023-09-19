import { Link, useLocation } from "react-router-dom";
import { Div, List } from "./MoviesList.styled";




// const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <Div>
            <List>
                {movies.map(({ id, title, name }) =>
                (
                    <li key={id} >
                        <Link to={`/movies/${id}`} state={{ from: location }}>
                            {title}{name}
                        </Link>
                    </li>
                )
                )
                }
            </List>
        </Div>
    )
};