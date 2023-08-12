import styled from 'styled-components';

export const ActorsCard = styled('li')`
    background-color: darkred;
    width: 100px;
    height: 100%;
    list-style-type: none;
`;
export const ActorsList = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
`;
export const ActorsName = styled('p')`
    color: white;
    text-align: center;
    font-size: 15px;
    height: 30px;
`;

export const ActorsError = styled('p')`
    padding: 2px;
    text-align: center;
    font-size: 30px;
`;