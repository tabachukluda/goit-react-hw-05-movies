import {
    MovieImg,
    MovieAbout,
    MovieTitle,
    MovieScore,
    MovieOverview,
    MovieOverviewText,
    MovieGenres,
    MovieGenresText,
    MovieDetailsCard,
} from './MovieDetailsCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ movie }) => {
    const { overview, title, release_date, genres, vote_average } = movie;

    let posterPath;
    if (movie.poster_path) {
        posterPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
    } else {
            posterPath = process.env.PUBLIC_URL + '/istockphoto-1208666888-612x612.jpg';
}
    return (
    <MovieDetailsCard>
        <MovieImg src={posterPath} alt={title} />
        <MovieAbout>
        <MovieTitle>
            "{title}"({new Date(release_date).getFullYear()})
        </MovieTitle>
        <MovieScore>
          User Score: {Math.round(vote_average * 10)}%
        </MovieScore>
        <MovieOverview>Overview</MovieOverview>
        <MovieOverviewText>{overview}</MovieOverviewText>
        <MovieGenres>Genres</MovieGenres>
        <MovieGenresText>
            {genres.map(genre => genre.name).join(', ')}
        </MovieGenresText>
        </MovieAbout>
    </MovieDetailsCard>
);
};
MovieCard.propTypes = {
    movie: PropTypes.shape({
    poster_path: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        })
    ),
}),
};