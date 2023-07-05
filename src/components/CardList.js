import React from 'react';
import Card from './Card';

const CardList = ({ pokemonList }) => {
  return (
    <React.Fragment>
      {
        pokemonList.map((pokemon, i) => {
          return (
            <Card 
              key={pokemonList[i].id} 
              id={pokemonList[i].id} 
              name={pokemonList[i].name}
              imageUrl={pokemonList[i].imageUrl} 
            />
          );
        })
      }
    </React.Fragment>
  );
}

export default CardList;