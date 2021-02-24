import React from 'react';

const Pokemon = (props) => {
    console.log(props);
    const pokemonCards = props.pokemon.types.map((type, i) => {
        return (
            <li key={i}>{type}</li>
        )

    });
    return (
        <article className="card-inner">
            <img src={props.pokemon.url} alt={props.pokemon.name} className="card-inner__image" />
            <h2 className="card-inner__title"> {props.pokemon.name} </h2>
            <ul className="card-inner__list">{pokemonCards}</ul>
        </article >
    )
}

export default Pokemon;