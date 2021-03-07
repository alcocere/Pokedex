import React from 'react';
import PropTypes from 'prop-types';


const Pokemon = props => {

    const handleClick = ev => {
        // console.log(props.id);
        // console.log(ev.currentTarget.id);
        props.handlePokemon(props.id);
    };

    const typesList = props.types.map((type, index) => {
        return (
            <li key={index} className={`card__inner--list card__type--${type}`}>
                {type}
            </li>
        );
    });

    return (
        <article className="card__inner" id={props.id} onClick={handleClick}>
            <img className="card__inner--image" src={props.url} alt={'Imagen de ' + props.name} />
            <h3 className="card__inner--title">{props.name}</h3>
            <ul className="card__inner--list">{typesList}</ul>
        </article>
    );
};

export default Pokemon;

Pokemon.propTypes = {
    typesList: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    name: PropTypes.string,
};