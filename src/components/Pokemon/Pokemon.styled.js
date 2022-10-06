import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;

    @media(max-width: 1024px){
        align-items: initial ;
        height:initial ;
    }
`

export const PokemonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.backgroundColor};
    border-radius: 10px;
    gap: 15px;
    width: 50%;

    @media(max-width: 1024px){
        flex-direction: column;
    }


    @media(max-width: 768px){
        width: 300px;
    }
`;
export const PokemonDescriptionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    gap: 20px;
    padding: 20px;
    width: 50%;

    @media(max-width: 1024px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
`;
export const PokemonDescriptionList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({ theme }) => theme.textColor};
    font-size: 20px;

`
export const PokemonImage = styled.img`
    max-width: 300px ;

    @media(max-width: 1024px){
        max-width: 200px ;
    }
`

export const PokemonName = styled.h1`
    color: ${({ theme }) => theme.textColor};
`
export const PokemonDescription = styled.h2`
    color: ${({ theme }) => theme.textColor};
`
export const LinkStyled = styled(Link)`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.textColor};
    font-weight: bold;
    font-size: 20px;
    color: ${({ theme }) => theme.textColor};
`