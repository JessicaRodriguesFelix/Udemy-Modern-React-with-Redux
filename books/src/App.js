import { useState, useEffect } from 'react';
import axios from 'axios';
import  BookCreate  from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:3001/books");
      setBooks(response.data)
    }

    useEffect(()=> {
      fetchBooks()
    },[books])

      useEffect(() => {
        console.log('Hi')
      });

    const handleCreateBook = async (title) => {
      const response = await axios.post("http://localhost:3001/books", {
        title: title,
      });

      // Take all the existing books, add them to this brand new array, and include the new data from the response.
      // Then, set it to the state
      const updatedBooks = [...books, response.data];
      setBooks(updatedBooks);
    }

    const handleDeleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return  book.id !== id;
        })
        setBooks(updatedBooks);
    }

    const handleEditBookById = (id, newTitle) => {
      const updatedBooks =  books.map((book) => {
            if (book.id === id) {
             return {...book, title: newTitle};
            }
            return book;
        })
        setBooks(updatedBooks);
    }

    return (
      <div className="app">
        <h1>Reading List</h1>
        <BookList
          booksList={books}
          onDelete={handleDeleteBookById}
          onEdit={handleEditBookById}
        />
        <BookCreate onCreate={handleCreateBook} />
      </div>
    );
}

export default App