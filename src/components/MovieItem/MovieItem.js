import { Container, Div, H3, Item, StyledLink, Ul } from "./MovieItem.styled"

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'

export const MovieItem = ({ image, title, date, score, genres, overview }) => {
    return (
        <Container>
            <Item>
                <img src={image ? `https://image.tmdb.org/t/p/w500/${image}` : defaultImg} width={250} alt={title}></img>
                <Div>   <h2>{title} ({date})</h2>
                    <p>User Score: {score}%</p>
                    <h3>Overview</h3>
                    <p>{overview}</p>
                    <h3>Genres</h3>
                    <p>{genres.join(" ")}</p>
                </Div>
            </Item>
            <Div>
                <H3>Additional information</H3>
                <Ul>
                    <li>
                        <StyledLink to="cast" >Cast</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="reviews">Reviews</StyledLink>
                    </li>
                </Ul>
            </Div>
        </Container>
    )
}