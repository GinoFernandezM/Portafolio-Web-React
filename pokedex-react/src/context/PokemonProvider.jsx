import { useState } from 'react'
import {PokemonContext} from './PokemonContext'
import { useEffect } from 'react'

const PokemonProvider = ({children}) => {
    const [allPokemons, setAllPokemons] = useState(0)
    const [offset, setOffset] = useState(0)

    //llamar a los primeros 50 pokemones
    const getAllPokemons = async(limit=50) => {
        const baseURL = 'https://pokeapi.co/api/v2/'

        const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=${offset}`)
        const data = await res.json()
        //console.log(data)
        const promises = data.results.map(async(pokemon) =>{
            const res = await fetch(pokemon.url)
            const data = await res.json()
            return data
        })
        const results = await Promise.all(promises)
        setAllPokemons(results)
        console.log(results)
    }


    useEffect(()=>{
        getAllPokemons()
    }, [])

    return (
        <PokemonContext.Provider value={{
            numero: 0
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider
