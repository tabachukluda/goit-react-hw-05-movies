import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
    padding: 8px;
    text-decoration: none;
    color: white;
    font-size: 25px;
    &.active {
    background-color: white;
    border-radius: 5px;
    color: darkred;
}
`;

export const NavList = styled('nav')`
    background-color: darkred;
    display: flex;
    padding: 20px;
    gap: 25px;
    justify-content: center;
`;