import { Link } from "react-router-dom";

export const MoviesList = ({ movies }) => {
    return (
        <ul>
            {movies.map(({ id, title, name }) =>
            (<li key={id} >
                <Link to={`/movies/${id}`}> <h3>{title}{name}</h3></Link>
            </li>)
            )
            }
        </ul>
    )
};