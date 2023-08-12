import { NotFoundBlock, NotFoundText, NotFoundLink } from './Pages.styled';

export const NotFound = () => {
    return (
    <NotFoundBlock>
        <NotFoundText>Sorry, something wrong</NotFoundText>
        <NotFoundLink to="/">Back to main page</NotFoundLink>
    </NotFoundBlock>
    );
};