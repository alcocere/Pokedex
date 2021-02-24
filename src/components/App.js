import React from "react";
import data from '../data/data.json';
import PokeList from './PokeList';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pokemons: data }
    }

    render() {
        const pokemonData = this.state.pokemons;
        return (
            <div className="App">
                <PokeList pokemons={pokemonData} />
            </div>
        );
    }
}

export default App;
