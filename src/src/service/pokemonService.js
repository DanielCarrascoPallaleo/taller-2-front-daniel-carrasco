const URL_API_EXTERNA = 'https://pokeapi.co/api/v2/pokemon?limit=10';

export const obtenerPokemones = async () => {
    try {
        const response = await fetch(URL_API_EXTERNA);
        if (!response.ok) {
            throw new Error('Error con la api externa pokemon');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
};