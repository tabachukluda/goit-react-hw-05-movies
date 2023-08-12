import { fetchTrendingApi } from '../api/Api';
import { useState, useEffect } from 'react';
import Notiflix from 'notiflix';
import {
    MoviesList,
    LinkItem,
    MovieTitle,
    TrendingTitle,
} from './Pages.styled';

export const Home = () => {
    const [trendings, setTrendings] = useState([]);

    useEffect(() => {
    async function moviesFetch() {
        try {
        const { results } = await fetchTrendingApi();
        if (results < 1) {
            Notiflix.Notify.warning("Сouldn't find it, please try again");
        }
        setTrendings(results);
        } catch {
        Notiflix.Notify.warning('Something went wrong, please try again');
        }
    }
    moviesFetch();
    }, []);

    return (
    <>
        <TrendingTitle>Trending movies</TrendingTitle>
        {trendings && (
        <MoviesList>
            {trendings.map(movie => {
            let posterPath;
            if (movie.poster_path) {
                posterPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
            } else {
                posterPath =
                '/public/pngtree-film-film-stage-blue-glitter-movie-background-image_322039.jpg';
            }

            return (
                <LinkItem key={movie.id} to={`/movies/${movie.id}`}>
                <img src={posterPath} width="200" alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
                </LinkItem>
            );
            })}
        </MoviesList>
        )}
    </>
    );
};