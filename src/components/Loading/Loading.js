import React from 'react'

export default function Loading({text}) {
    return (
        <>
            <h2 className="pokemons-loading" data-text={text}>{text}</h2>
        </>
    )
}
