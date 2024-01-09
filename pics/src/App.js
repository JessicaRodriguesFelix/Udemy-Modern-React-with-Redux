import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit = async (term) => {
    await searchImages(term);
  };
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
