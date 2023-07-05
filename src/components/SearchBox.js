import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div className='pa2'>
      <input 
        className='pa3 ba bg-light-gray' 
        type='search' 
        placeholder='Search pokemon'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;