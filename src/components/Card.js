import React from 'react';

const Card = ({ id, name }) => {
  let nameWOHyphen = name;
  if (name !== "ho-oh") {
    nameWOHyphen = name.split('-')[0];
  }

  return (
    <div className='tc bg-light-gray dib br3 pa3 ma2 grow bw2 shadow-5 pointer'>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name}/>
      <div>
        <h4>{(nameWOHyphen.charAt(0).toUpperCase() + nameWOHyphen.slice(1))}</h4>
      </div>
    </div>
  );
}

export default Card;