import { useState } from 'react';
import './Query.css';

const Query = ({
    bannedNames,
    setBannedNames,
    bannedTypes,
    setBannedTypes,
    bannedWeights,
    setBannedWeights,
    bannedStats,
    setBannedStats,
}) => {
    const [pokemon, setPokemon] = useState({
        name: 'wailmer',
        type: 'water',
        weight: '1300',
        totalStats: '400',
    });

    const [pokeImage, setPokeImage] = useState(
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png',
    );

    const isBanned = (pokemonData) => {
        if (bannedNames.includes(pokemonData.name)) return true;
        if (bannedTypes.includes(pokemonData.type)) return true;
        if (
            bannedWeights.some(
                (weight) => parseInt(pokemonData.weight) >= parseInt(weight),
            )
        )
            return true;
        if (
            bannedStats.some(
                (stat) => parseInt(pokemonData.totalStats) <= parseInt(stat),
            )
        )
            return true;

        return false;
    };

    const addToBanList = (key, value) => {
        switch (key) {
            case 'name':
                if (!bannedNames.includes(value)) {
                    setBannedNames([...bannedNames, value]);
                }
                break;
            case 'type':
                if (!bannedTypes.includes(value)) {
                    setBannedTypes([...bannedTypes, value]);
                }
                break;
            case 'weight':
                if (!bannedWeights.includes(value)) {
                    setBannedWeights([...bannedWeights, value]);
                }
                break;
            case 'totalStats':
                if (!bannedStats.includes(value)) {
                    setBannedStats([...bannedStats, value]);
                }
                break;
            default:
                break;
        }
    };

    const getData = async () => {
        const id = Math.floor(Math.random() * (1025 - 1) + 1);
        const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();

            const pokeName = result.name;
            const type = result.types[0].type.name;
            const weight = result.weight.toString();
            const image = result.sprites.front_default;
            const totalStats = result.stats
                .reduce((accumulator, currValue) => {
                    return accumulator + currValue.base_stat;
                }, 0)
                .toString();

            const newPokemon = {
                name: pokeName,
                type: type,
                weight: weight,
                totalStats: totalStats,
            };

            if (isBanned(newPokemon)) {
                getData();
                return;
            }

            setPokemon(newPokemon);
            setPokeImage(image);

            console.log(pokemon);
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="content">
            <div className="query">
                <h1>Who's That Pokemon!?</h1>
                <p>Find a Pokemon that fits you!</p>
                <div className="pokemon">
                    <img src={pokeImage} alt="" />
                    <div className="attributes">
                        {Object.entries(pokemon).map(([key, value]) => (
                            <button
                                key={key}
                                onClick={() => addToBanList(key, value)}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}:{' '}
                                {value.charAt(0).toUpperCase() + value.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
                <button className="reroll" onClick={getData}>
                    Discover
                </button>
            </div>
        </div>
    );
};

export default Query;
