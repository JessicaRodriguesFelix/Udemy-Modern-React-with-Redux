import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({children}) {
   
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data);
    };

      const handleCreateBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
          title: title,
        });

        // Take all the existing books, add them to this brand new array, and include the new data from the response.
        // Then, set it to the state
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
      };

      const handleDeleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updatedBooks = books.filter((book) => {
          return book.id !== id;
        });
        setBooks(updatedBooks);
      };

      const handleEditBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
          title: newTitle,
        });
        const updatedBooks = books.map((book) => {
          if (book.id === id) {
            // the ...response.data means that all the key value pairs and add it to this new object
            return { ...book, ...response.data };
          }
          return book;
        });
        setBooks(updatedBooks);
      };

      const valueToShare = {
        // Objects in JS a pair of key-values, you can condense it if key and value have the same name
        books,
        handleCreateBook,
        handleDeleteBookById,
        handleEditBookById,
        fetchBooks,
      };
  
    return (
      <BooksContext.Provider value={ valueToShare }>
        {children}
      </BooksContext.Provider>
    );
}
export { Provider }
export default BooksContext;