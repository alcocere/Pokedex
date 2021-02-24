import React from "react";
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        const pokemon = this.props.pokemons.map((pokemonItem) => {
            return (
                <li key={pokemonItem.id} className="card" >
                    <Pokemon pokemon={pokemonItem} />
                </li>
            );
        });
        return (
            <div>
                <ul className="card-container">{pokemon}</ul>
            </div>

        );
    }
}

export default PokeList;