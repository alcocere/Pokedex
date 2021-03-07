import data from '../data/data.json';
import PokeList from './PokeList';
import React, { useState } from "react";

const App = () => {
    const [pokemons] = useState(data);
    const [favs, setFavs] = useState([]);

    const handlePokemon = clickedId => {
        console.log(clickedId);
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
                        <h2 className="app-fav_title">This are my favorite Pokemons</h2>
                        <PokeList className="fav-pokemonList" pokemons={favs} handlePokemon={handlePokemon}
                        />
                    </article>
                </section>
            </main>
        </div>
    );
};

export default App;
