import React from 'react';

const MenuHeader = ({ logoImg, name, tagline, headline }) => {
    return (
        <div>
            <div className="logo">
                <img src={logoImg} alt={name}/>
                <span>{name}</span>
            </div>
            <p className="tagline">{tagline}</p>
            <h1 className="headline">{headline}</h1>
        </div>
    );
};

export default MenuHeader;