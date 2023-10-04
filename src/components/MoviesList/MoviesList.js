import { useLocation } from "react-router-dom";
import { Card, Div, Item, List, Title, CardLink, Img, Paragr } from "./MoviesList.styled";

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

export const MoviesList = ({ movies }) => {
    const location = useLocation();
    return (
        <Div>
            <h2 style={{ padding: '20px 20px 20px 20px', textTransform: 'uppercase' }}>Trending today</h2>
            <List>
                {movies.map(({ id, title, name, backdrop_path, release_date }) =>
                (
                    <Item key={id} >
                        <Card>
                            <CardLink to={`/movies/${id}`} state={{ from: location }}>
                                <Img src={backdrop_path ? `https://image.tmdb.org/t/p/w500/${backdrop_path
                                    }` : defaultImg} alt={title} width={380} />
                                <Title>{title}{name}</Title>
                                <Paragr>{release_date}</Paragr>
                            </CardLink>
                        </Card>
                    </Item>
                )
                )
                }
            </List>
        </Div>
    )

};