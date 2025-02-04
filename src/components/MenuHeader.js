import React from 'react';

const MenuHeader = ({ logoImg, name, tagline, headline }) => {
    return (
        <div>
            <div class="logo">
                <img src={logoImg} alt={name}/>
                <span>{name}</span>
            </div>
            <p class="tagline">{tagline}</p>
            <h1 class="headline">{headline}</h1>
        </div>
    );
};

export default MenuHeader