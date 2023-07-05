import React from 'react';
import Card from './Card';

const CardList = ({ pokemonList }) => {
  return (
    <React.Fragment>
      {
        pokemonList.map((pokemon, i) => {
          return (
            <Card 
              key={i} 
              id={i} 
              name={pokemonList[i].name}
            />
          );
        })
      }
    </React.Fragment>
  );
}

export default CardList;