import data from '../data/data.json';
import PokeList from './PokeList';
import React, { useState } from "react";
import PropTypes from 'prop-types';

const App = () => {
    const [pokemons] = useState(data);
    const [favs, setFavs] = useState([]);

    const handlePokemon = clickedId => {
        // console.log(clickedId);
        const favPokemonIndex = favs.findIndex(fav => {
            return fav.id === clickedId;
        });

        if (favPokemonIndex === -1) {
            const pokemonClicked = pokemons.find(pokemon => {
                return pokemon.id === clickedId;
            });
            favs.push(pokemonClicked);
            setFavs([...favs]);
        } else {
            favs.splice(favPokemonIndex, 1);
            setFavs([...favs]);
        }
    };

    let favTitle;
    let noFavs;
    if (favs.length !== 0) {
        favTitle = "This are my favorite Pokemons";
    } else {
        favTitle = '';
        noFavs = 'hide'
    }

    return (
        <div>
            <header className="app-header">
                <h1 className="app-header__title"> Choose your favorite PoKemon</h1>
            </header>
            <main>
                <section>
                    <PokeList pokemons={pokemons} handlePokemon={handlePokemon} />
                </section>
                <section className="app-fav">
                    <article>
                        <h2 className={'app-fav_title ' + noFavs}>{favTitle}</h2>
                        <PokeList className="fav-pokemonList" pokemons={favs} handlePokemon={handlePokemon}
                        />
                    </article>
                </section>
            </main>
        </div>
    );
};

export default App;

App.propTypes = {
    pokemonData: PropTypes.object,
    id: PropTypes.number,
    url: PropTypes.string,
    name: PropTypes.string,
    favPokemonIndex: PropTypes.number,
}