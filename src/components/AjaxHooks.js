import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default function AjaxHooks() {
    const [pokemons, setPokemons] = useState([]);
useEffect(()=> {
    const getPokemons = async (url) => {
        let res = await fetch(el.url),
    }
})
}