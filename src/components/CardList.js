import React from 'react';
import Card from './Card';

const CardList = ({ pokemonList }) => {
  return (
    <React.Fragment>
      {
        pokemonList.map((pokemon, i) => {
          //need to grab second to last item based on url to get the id number of individual pokemon
          //this is neccesary as using i for id will cause the website to break if a user searches 
          //(goes off of CURRENT filteredPokemon index for images, and we want that id to stay the same)
          const urlSplit = pokemonList[i].url.split('/');
          const id = urlSplit[urlSplit.length-2];
          return (
            <Card 
              key={id} 
              id={id} 
              name={pokemonList[i].name}
            />
          );
        })
      }
    </React.Fragment>
  );
}

export default CardList;