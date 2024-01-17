import { useState } from 'react';
import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';
import './App.css';

function App() {

const [images, setImages ] = useState([]);


  const handleSubmit = async (term) => {
   const result = await searchImages(term);
   setImages(result)
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <button
        onClick={() => setImages([])}
        style={{
          borderRadius: "5px",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Clean Results
      </button>
      <ImageList images={images} />
    </div>
  );
}

export default App;
