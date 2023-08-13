import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const LinkItem = styled(Link)`
    width: 200px;
    background-color: darkred ;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    text-decoration: none;
    margin-bottom: 40px;
    border-radius: 5px;
`;

export const MoviesList = styled('div')`
    padding: 60px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 40px;
`;

export const MovieTitle = styled('h2')`
    text-align: center;
    font-size: 15px;
    color: white;
`;

export const LinkButton = styled(Link)`
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    color: white;
    border: 2px solid black;
    background-color: darkred;
    &:hover,
    :focus {
    background-color: white;
    color: darkred;
}
`;


export const TrendingTitle = styled('h1')`
    text-align: center;
    font-weight: 500;
    font-size: 35px;
    color: darkred;
`;


export const MovieDetailsAdditional = styled('div')`
    padding: 10px;
`;
export const MovieDetailsAdditionalTitle = styled('h3')`
    margin-top: 0;
    font-size: 15px;
`;
export const NavItem = styled(NavLink)`
    display: inline-block;
    padding: 10px;
    text-decoration: none;
    font-size: 15px;
    color: black;
    border-radius: 5px;
    border: 2px solid black;
`;

export const LinkBox = styled('div')`
    padding: 10px;
`;

export const MoviesSearchButton = styled('button')`
    font-size: 18px;
    background-color: darkred;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid black;
    &:hover,
    :focus {
    background-color: white;
    color: darkred;
`;


export const MoviesForm = styled('form')`
    display: flex;
    gap: 20px;
    padding: 20px;
    justify-content: center;
`;
export const MoviesInput = styled('input')`
    padding: 10px;
    font-size: 20px;
    outline: none;
    border: 2px solid black;
    border-radius: 5px;
`;

export const NotFoundBlock = styled('div')`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const NotFoundText = styled('p')`
    font-size: 30px;
`;
export const NotFoundLink = styled(Link)``;