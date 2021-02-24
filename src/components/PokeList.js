import React from "react";
import Pokemon from './Pokemon';

class PokeList extends React.Component {
    render() {
        console.log(this.props.data);
        const pokemon = this.props.data.map((pokemonItem) => {
            return (
                <li key={pokemonItem.id} >
                    <Pokemon pokemon={pokemonItem} />
                </li>
            );
        });
        return (
            <div>
                <ul>{pokemon}</ul>
            </div>

        );
    }
}

export default PokeList;