import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { removePokemon } from '../../actions';
import Loading from '../Loading/Loading';
import PokemonDetails from '../PokemonDetails/PokemonDetails';
import SearchForm from '../SearchForm/SearchForm';
import { Button } from 'react-bootstrap';



const UserPokemonList = ({ addPokemons, removePokemon }) => {

    const [searchPokemon, setSearchPokemon] = useState('');

    const handleSearchChange = (e) => {
        setSearchPokemon(e.target.value);
    };


    useEffect(() => addPokemons, [addPokemons]);

    return <>
        <SearchForm search={searchPokemon} onSearchChange={handleSearchChange} placeholderText="Search Your Pokemons"/>
        {addPokemons.length !== 0 && addPokemons.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
        ).map((pokemon) => (
            <ul key={pokemon.id} className="pokemon-list-item" >
                <li><img src={pokemon.sprites['front_default']} alt={pokemon.name} /></li>
                <li><h2>{pokemon.name}</h2></li>
                <li>Type(s):{pokemon.types.map((type) => {
                    const stringType = `${type.type.name} `;
                    return stringType;
                })}</li>
                <li className="pokemon-list-btns" > 
                    <PokemonDetails pokemon={pokemon} />
                    <Button variant="outline-primary" onClick={() => removePokemon(pokemon)}>X</Button>
                </li>

            </ul>
        ))}
        {addPokemons.length === 0 && <Loading text="Empty..." />}
    </>
}

const mapStateToProps = (state) => {
    return {
        addPokemons: state.addPokemons
    }
}

export default connect(mapStateToProps, {removePokemon})(UserPokemonList)