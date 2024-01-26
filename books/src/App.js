import { useState } from 'react';
import  BookCreate  from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const handleCreateBook = (title) => {
       const updatedBooks = [ ...books, { id: Math.round(Math.random() * 9999), title }];
       setBooks(updatedBooks)
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