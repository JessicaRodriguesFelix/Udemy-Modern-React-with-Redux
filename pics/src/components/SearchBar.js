function SearchBar({ onSubmit }) {
    const handleClick = () => {
        //hard coded the term 'cars'for now
        onSubmit('cars')
    }
  return (
    <div>
      <input />
      <button onClick={handleClick}>Click here</button>
    </div>
  );
}

export default SearchBar;
