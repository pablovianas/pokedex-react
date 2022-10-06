import styled from 'styled-components';
import { Link } from "react-router-dom";


export const PokemonCards = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 30px;
`;

export const LoadMorePokemons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const PokemonList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center ;
  width: 320px;
  height: 400px;
  gap: 20px;
  border-radius: 10px;
  padding: 15px;
  background-color: ${({theme}) => theme.backgroundColor};
`;

export const LinkStyled = styled(Link)`
  font-weight: bold;
  color: ${({ theme }) => theme.textColor};
  font-size: 30px;
`

export const PokemonImage = styled.img`
  max-width: 300px ;
`
