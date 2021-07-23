import React, { useEffect, useState } from 'react'
import { Alert, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getPokemons, addPokemon } from '../../actions';
import SearchForm from '../SearchForm/SearchForm.js';
import Message from '../Message/Message';
import Loading from '../Loading/Loading';


const PokemonLists = ({ pokemons, addPokemons, getPokemons, addPokemon }) => {
    const [searchPokemon, setSearchPokemon] = useState('');
    const [show, setShow] = useState(false);
    const [pokemonName, setPokemonName] = useState('');

    const handleSearchChange = (e) => {
        setSearchPokemon(e.target.value);
    };

    const handleAddPokemon = (pokemon) => {
        addPokemon(pokemon);
        setShow(true);
        setPokemonName(pokemon.name);
    }

    const handleHideMessage = () => {
        setShow(false);
    }

    useEffect(() => {
        getPokemons();
    }, [getPokemons]);

    return <>
        <SearchForm search={searchPokemon} onSearchChange={handleSearchChange} placeholderText="Search Pokemons" />

        {pokemons.length === 50 && pokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
        ).map((pokemon) => (
            <ul key={pokemon.id} className="pokemon-list-item" >
                <li><img src={pokemon.sprites['front_default']} alt={pokemon.name} /></li>
                <li> <h3> {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</h3></li>
                <li>
                    <div>
                        <Alert variant="info" ><strong>TYPE(S) :</strong>{pokemon.types.map((type) => {
                            const stringType = ` ${type.type.name[0].toUpperCase() + type.type.name.substr(1)} `;
                            return stringType;
                        })}</Alert>
                    </div>
                </li>
                <li>
                    <div className="stats">
                        <Alert variant="warning"><strong>- STATUS -</strong>
                        {pokemon.stats.map((stat, index) => <p key={index}><strong>{stat.stat.name.toUpperCase()} :</strong> {stat.base_stat}</p>)}</Alert>
                    </div>
                </li>
                <li className="pokemon-list-btns">
                    <Button variant="outline-primary" onClick={(e) => handleAddPokemon(pokemon)}>+</Button>
                </li>
            </ul>
        ))}
        {pokemons.length < 50 && <Loading text="Loading..." />}

        <Message name={pokemonName} show={show} hideMessage={handleHideMessage} />
    </>

}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemons,
        addPokemons: state.addPokemons
    }
}

export default connect(mapStateToProps, { getPokemons, addPokemon })(PokemonLists)