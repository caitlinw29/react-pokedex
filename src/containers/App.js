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

  componentDidMount(){
    //limit to original 150 for speed (male and female nidoran push it up to 151)
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemonList: pokemon.results}))
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
        pokemon.url.split('/')[pokemon.url.split('/').length-2].toLowerCase().includes(searchfield.toLowerCase())
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
