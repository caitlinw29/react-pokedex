import React from 'react';

const Card = ({ id, name }) => {
  return (
    <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;