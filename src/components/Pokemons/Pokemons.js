import React, { useState, useEffect } from 'react';
import { ThemeContext } from "../../contexts/theme-context"
import { useContext } from "react"
import { Button } from '../Button/Button';
import { Header } from '../Header/Header.styled';
import { ThemeToggerButton } from '../Theme-Togger-Button/Theme-Togger-Button'
import { PokemonCards, PokemonList, PokemonImage ,LoadMorePokemons, LinkStyled } from './Pokemons.styled';
import axios from 'axios'

export const Pokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offSet, setOffSet] = useState(10);
    const { theme } = useContext(ThemeContext)
  
    async function getPokemons() {
        setOffSet(offSet + 10)
        const pokemonList = await axios(`https://pokeapi.co/api/v2/pokemon?limit=${offSet}`)
        const data = pokemonList.data.results
        setPokemons(data)
    }

    useEffect(() => {
        (async function loadFirstPokemons(){
            await getPokemons() 
        })()
        // eslint-disable-next-line
    }, []);
    
    return (
        <>
            <Header theme={theme} >
                <ThemeToggerButton>Change theme</ThemeToggerButton>
            </Header>
            <PokemonCards>
                {
                    pokemons.map((pokemon, index) =>{
                        return (
                            <PokemonList key={index} theme={theme}>
                                <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index+1}.png`} alt={'pokemons'}></PokemonImage>
                                <LinkStyled to={`/pokemon/${index + 1}`} theme={theme} >{pokemon.name}</LinkStyled>
                            </PokemonList>
                        )
                    })
                }
            </PokemonCards>
            <LoadMorePokemons theme={theme} >
                <Button onClick={() => getPokemons()}>Load more</Button>
            </LoadMorePokemons>
        </>
    )
}

