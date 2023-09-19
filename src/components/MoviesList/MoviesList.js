import { Link, useLocation } from "react-router-dom";
import { Div, List } from "./MoviesList.styled";

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