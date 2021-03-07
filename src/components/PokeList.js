import React from "react";
import Pokemon from './Pokemon';

const PokeList = props => {
    const pokeList = props.pokemons.map(pokemon => {
        return (
            <li key={pokemon.id.toString()} className="card">
                <Pokemon id={pokemon.id}
                    name={pokemon.name}
                    url={pokemon.url}
                    types={pokemon.types}
                    handlePokemon={props.handlePokemon} />
            </li>
        );
    });

    return <ul className="card-container">{pokeList}</ul>;
};

export default PokeList;