import { NavItem, NavList } from './Menu.styled';

export const Menu = () => {
    return (
        <NavList>
            <NavItem to="/">Home</NavItem>
            <NavItem to="/movies">Movies</NavItem>
        </NavList>
    );
};