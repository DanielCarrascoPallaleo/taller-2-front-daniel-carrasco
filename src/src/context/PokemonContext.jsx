import { createContext, useState, useEffect } from 'react';
import { obtenerPokemones } from '../service/pokemonService';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [listaPokemons, setListaPokemons] = useState([]);
    
    const cargarData = async () => {
        const datos = await obtenerPokemones();
        setListaPokemons(datos);
    };

    useEffect(() => {
        cargarData();
    }, []);

    return (
        <PokemonContext.Provider value={{ listaPokemons, cargarData }}>
            {children}
        </PokemonContext.Provider>
    );
};