import React from 'react';

const Pokemon = (props) => {
    console.log(props);
    const pokemonCards = props.pokemon.types.map((type, i) => {
        return (
            <li key={i}>{type}</li>
        )

    });
    return (
        <article>
            <h2> {props.pokemon.name} </h2>
            <img src={props.pokemon.url} alt="pokemon" />
            <ul>{pokemonCards}</ul>

        </article >
    )
}

export default Pokemon;