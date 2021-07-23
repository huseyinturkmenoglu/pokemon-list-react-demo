import { useState } from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import './App.scss';
import PokemonLists from './components/PokemonLists/PokemonLists';
import UserPokemonList from './components/UserPokemonList/UserPokemonList';

const App = () => {

  const [key, setKey] = useState('pokemonList')

  return <Container fluid>
    <Tabs activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 justify-content-center nav-header">
      <Tab eventKey="pokemonList" title="Pokemon List" className="pokemon-list">
        <PokemonLists />
      </Tab>
      <Tab eventKey="pokedex" title="Your Pokedex" className="pokemon-list">
        <UserPokemonList />
      </Tab>
    </Tabs>
  </Container>
}

export default App;