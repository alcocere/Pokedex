import React from "react";

class PokeList extends React.Component {
    render() {
        console.log(this.props.data);
        const pokemon = this.props.data.map((pokemonItem) => {
            return (
                <li key={pokemonItem.id} >
                    {pokemonItem.name}
                </li>
            )
        })
        return (
            <div>
                <ul>{pokemon}</ul>
            </div>

        );
    }
}

export default PokeList;