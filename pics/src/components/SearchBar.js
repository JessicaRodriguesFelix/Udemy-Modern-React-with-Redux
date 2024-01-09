import { useState } from 'react';

function SearchBar({ onSubmit }) {

    const [ term, setTerm ] = useState('');

    const handleChange = (event) => {
        setTerm(event.target.value);
    }
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term)
    }
   
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
