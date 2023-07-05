import React from 'react';

const Card = ({ id, name, imageUrl }) => {
  return (
    <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
      <img src={imageUrl} alt={name}/>
      <div>
        <h2>{name}</h2>
      </div>
    </div>
  );
}

export default Card;