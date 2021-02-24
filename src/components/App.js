import React from "react";
import data from '../data/data.json';
import PokeList from './PokeList';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pokemons: data }
    }

    render() {
        const pokemonItem = this.state.pokemons;
        return (
            <div>
                <header className="app-header">
                    <h1 className="app-header__title">Mi lista de pokemon</h1>
                </header>
                <main className="main-section">
                    <PokeList pokemons={pokemonItem} />
                </main>
            </div>
        );
    }
}

export default App;
