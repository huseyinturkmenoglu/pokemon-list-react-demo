import React, { useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';


export default function PokemonDetails({ pokemon }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-info" onClick={handleShow}>
                Detail
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img src={pokemon.sprites.versions["generation-v"]["black-white"].animated["front_default"]} alt="pokemon.name" />
                        <span className="pokemon-name ms-3">{pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}</span>
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className="ability">
                        <Alert variant="dark">Abilities : {pokemon.abilities.map((ability) => ability.ability.name[0].toUpperCase() + ability.ability.name.substr(1) + " ")}</Alert>
                    </div>
                    <div className="stats">
                        <Alert variant="danger">Stats</Alert>
                        {pokemon.stats.map((stat, index) => <p key={index}><strong>{stat.stat.name.toUpperCase()} :</strong> {stat.base_stat}</p>)}
                    </div>
                    <div className="types">
                        <Alert variant="primary">Type(s):{pokemon.types.map((type) => {
                            const stringType = `${type.type.name[0].toUpperCase() + type.type.name.substr(1)} `;
                            return stringType;
                        })}</Alert>
                    </div>
                    <div className="moves">
                        <Alert variant="success">Moves : 
                        {pokemon.moves.map((move) => ' ' + move.move.name + ',')}</Alert>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
