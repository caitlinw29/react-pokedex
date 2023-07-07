import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component {
  constructor(){
    super()
    this.state= {
      pokemonList: [],
      searchfield: '',
    }
  }

  async componentDidMount(){
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=386&offset=0');
    const data = await response.json();
    this.setState({ pokemonList: data.results});
  }

  //Arrow function here makes sure that 'this' doesn't target the input, but targets App
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { pokemonList, searchfield } = this.state;
    const filteredPokemon = pokemonList.filter(pokemon => {
      return (
        //name
        pokemon.name.toLowerCase().includes(searchfield.toLowerCase())
        ||
        //id
        pokemon.url.split('/')[pokemon.url.split('/').length-2].toLowerCase()===searchfield.toLowerCase()
      );
    })
    return !pokemonList.length ? 
      <h1>Loading</h1> :
    (
      <div className='tc'>
        <h1 className='f1'>Pokédex</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList pokemonList={filteredPokemon}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
