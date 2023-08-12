import { fetchCast } from '../../api/Api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';
import { Vortex } from 'react-loader-spinner';
import { ActorsCard, ActorsList, ActorsName } from './Cast.styled.jsx';

export const Cast = () => {
    const [loading, setLoading] = useState(false);
    const { movieId } = useParams();
    const [actors, setActors] = useState();

    useEffect(() => {
    setLoading(true);
    fetchCast(Number(movieId))
        .then(setActors)
        .catch(error =>
        Notify.failure(
            'Ooops, something went wrong, please try again ... ',
            error.messages
        )
    )
        .finally(setLoading(false));
    }, [movieId]);
    if (!actors) {
    return null;
    }

    let posterPath;
    const { cast } = actors;

    return (
    <ActorsList>
        {loading && (
        <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
    )}
        {cast.map(actor => {
        if (actor.profile_path) {
            posterPath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${actor.profile_path}`;
        } else {
            posterPath = process.env.PUBLIC_URL + '/stock-illustration-male-avatar-profile-picture.jpg';
        }
        return (
            <ActorsCard key={actor.id}>
            <img src={posterPath} width="100" height="150" alt={actor.name} />
            <ActorsName>{actor.name}</ActorsName>
            </ActorsCard>
        );
        })}
    </ActorsList>
    );
};