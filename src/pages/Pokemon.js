import axios from "axios";
import { ThemeToggerButton } from '../components/Theme-Togger-Button/Theme-Togger-Button'
import { ThemeContext } from "../contexts/theme-context"
import { useContext } from "react"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { HeaderHome } from "../components/Header/Header.styled";
import { Container, PokemonContainer, PokemonImage, PokemonDescriptionContainer, PokemonDescriptionList, PokemonName, PokemonDescription, LinkStyled } from "../components/Pokemon/Pokemon.styled";

export const Pokemon = () => {

    const [pokemon, setPokemon] = useState([])
    const { id } = useParams()
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        (async function getPokemon() {
            const pokemons = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
            setPokemon(pokemons.data)
        })()
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <HeaderHome theme={theme}> 
                <LinkStyled to={'/'} theme={theme}>Voltar a Home</LinkStyled>
                <ThemeToggerButton/>
            </HeaderHome>
            <Container>
                <PokemonContainer theme={theme}>
                    <PokemonDescriptionContainer theme={theme}>
                        <PokemonName theme={theme}>{pokemon?.name?.toUpperCase()} </PokemonName> 
                        <PokemonImage src={pokemon?.sprites?.other?.home?.front_default}></PokemonImage>
                    </PokemonDescriptionContainer>
                    <PokemonDescriptionContainer>
                        <PokemonDescription theme={theme}>Description</PokemonDescription>
                        <PokemonDescriptionList theme={theme}>
                            <h3>Moves</h3>
                            {
                                pokemon?.moves?.slice(0, 3).map((moves, index) => {
                                    return (
                                        <li key={index}>{moves.move.name}</li>
                                    )
                                })
                            }
                        </PokemonDescriptionList>
                        <PokemonDescriptionList theme={theme}>
                            <h3>Abilities</h3>
                            {
                                pokemon?.abilities?.map((ability, index) => {
                                    return (
                                        <li key={index}>{ability.ability.name}</li>
                                    )
                                })
                            }
                        </PokemonDescriptionList>
                        <PokemonDescriptionList theme={theme}>
                            <h3>Types</h3>
                            {
                                pokemon?.types?.map((type, index) => {
                                    return (
                                        <li key={index}>{type.type.name}</li>
                                    )
                                })
                            }
                        </PokemonDescriptionList>
                    </PokemonDescriptionContainer>
                </PokemonContainer>  
            </Container>
        </>
    )
}