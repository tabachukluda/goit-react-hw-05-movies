import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieDetails } from 'api/Api';

import {
    MovieDetailsAdditional,
    MovieDetailsAdditionalTitle,
    NavItem,
    LinkButton,
    LinkBox,
} from './Pages.styled';
import { MovieCard } from 'components/MovieDetailsCard/MovieDetailsCard';

export const MovieDetails = () => {
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const { movieId } = useParams();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
    const fetchMovie = async () => {
        try {
        const result = await fetchMovieDetails(movieId);
        setMovie(result);
        } catch (error) {
        setError(error);
        }
    };
    fetchMovie();
}, [movieId]);

    return (
    <>
        <>
        <LinkBox>
            {' '}
            <LinkButton to={backLinkHref}>Back to all movies</LinkButton>
        </LinkBox>
        {error && <div>Something wrong</div>}
        {movie && (
            <>
            <MovieCard movie={movie} />

            <MovieDetailsAdditional>
                <MovieDetailsAdditionalTitle>
                Additiona information
                </MovieDetailsAdditionalTitle>
                <NavItem to={'cast'} state={location.state}>
                Cast
                </NavItem>
                <NavItem to={'reviews'} state={location.state}>
                Reviews
                </NavItem>
            </MovieDetailsAdditional>
            </>
        )}
        </>
        <Suspense fallback={null}>
        <Outlet />
        </Suspense>
    </>
    );
};