import styled from 'styled-components';

export const MovieDetailsCard = styled('div')`
    display: flex;
    padding: 10px;
    gap: 40px;
    justify-content: center;
    background-color: white;
`;
export const MovieImg = styled('img')`
    width: 200px;
    height: 100%;
    display: block;
`;
export const MovieAbout = styled('div')`
    padding: 10px;
    border: 2px solid darkred;
    border-radius: 20px;
    width: 500px;
    height: 100%;
    background-color: white;
`;
export const MovieTitle = styled('h2')`
    text-align: center;
    font-size: 25px;
    color: darkred;
`;
export const MovieScore = styled('p')`
    font-size: 15px;
`;
export const MovieOverview = styled('h3')`
    font-size: 15px;
    color: darkred;
`;
export const MovieOverviewText = styled('p')`
    font-size: 15px;
`;
export const MovieGenres = styled('h3')`
    font-size: 20px;
    color: darkred;
`;
export const MovieGenresText = styled('p')`
    font-size: 15px;
`;