import React from "react";
import data from '../data/data.json';
import PokeList from './PokeList';


class App extends React.Component {
    render() {
        return (
            <div className="App">
                <PokeList data={data} />
            </div>
        );
    }
}
export default App;
