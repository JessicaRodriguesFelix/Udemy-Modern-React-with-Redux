import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const handleReset = () => {
    setAnimals([]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <div>
      <div className="app">
        <button onClick={handleClick}>Add animal</button>
        <button onClick={handleReset}>Reset animals</button>
      </div>
      { animals.length === 0 ? (
        <div className="msg-no-animals">
          <h1>No animals added yet!</h1>
        </div>
      ) : (
        <div className="app-animal">
          <div className="animal-list">{renderedAnimals}</div>
        </div>
      )}
    </div>
  );
}

export default App;
