import { useState } from 'react';
import './Query.css';


const Query = () => {
    const [pokemon, setPokemon] = useState(
        {
            id: 0,
            name: "",
            type: "",
            weight: "",
            image: "",
            totalStats: 0,
        }
    )

    const getData = async () => {
        const id = Math.floor(Math.random() * (1025 - 1) + 1);
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
        try{
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();

            const pokeId = id;
            const pokeName = result.name;
            const type = result.types[0].type.name;
            const weight = result.weight;
            const image = result.sprites.front_default;
            const totalStats = result.stats.reduce((accumulator, currValue) => {return accumulator + currValue.base_stat;}, 0);

            const newPokemon = {
                id: pokeId,
                name: pokeName,
                type: type,
                weight: weight,
                image: image,
                totalStats: totalStats,
            };

            setPokemon(newPokemon);
            
            console.log(pokemon);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <div className="content">
            <div className="query">
                <h1>Who's That Pokemon!?</h1>
                <p>Find a Pokemon that fits you!</p>
                <button onClick={getData}>Discover</button>
            </div>
        </div>
    );
};

export default Query;
