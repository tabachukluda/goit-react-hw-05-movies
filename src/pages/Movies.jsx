import { useState, useEffect } from 'react';
import { fetchSearchApi } from 'api/Api';
import { useSearchParams, useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import {
    MoviesForm,
    MoviesInput,
    MoviesList,
    MoviesSearchButton,
    MovieTitle,
    LinkItem,
} from './Pages.styled';


export const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState('');
    const inputParam = searchParams.get('filter') ?? '';
    const location = useLocation();

    useEffect(() => {
    if (!inputParam) {
        return;
    }
    async function fetch() {
        try {
        const { results } = await fetchSearchApi(inputParam);
        if (results.length < 1) {
            Notiflix.Notify.warning("Сouldn't find it, please try again");
        }
        setMovies(results);
        } catch (error) {
            Notiflix.Notify.warning('Something went wrong, please try again');
        }
    }
    fetch();
}, [inputParam]);

    const onSubmit = e => {
    if (!input) {
        Notiflix.Notify.warning('Please fill in the blanks');
    }
    e.preventDefault();
    setSearchParams(input !== '' ? { filter: input } : {});
    setInput('');
};

    const onChangeInput = value => {
    setInput(value);
};

    if (!movies) {
    return null;
}

    return (
    <>
        <MoviesForm onSubmit={onSubmit}>
        <MoviesInput
            type="text"
            value={input}
            name="input"
            onChange={e => onChangeInput(e.currentTarget.value.toLowerCase())}
        />
        <MoviesSearchButton type="submit">Search</MoviesSearchButton>
        </MoviesForm>
        {movies && (
        <MoviesList>
        {movies.map(movie => {
            let posterPath;
            if (movie.poster_path) {
            posterPath = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
            } else {
            posterPath = process.env.PUBLIC_URL + '/istockphoto-1208666888-612x612.jpg';
            }
            return (
            <LinkItem
                key={movie.id}
                to={`${movie.id}`}
                state={{ from: location }}
            >
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