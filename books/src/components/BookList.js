import BookShow from './BookShow'
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ booksList, onDelete, onEdit}) {

  // const { count, incrementCount } = useContext(BooksContext);

  const renderedBooks = booksList.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
  });

  return <div className="book-list">

    {renderedBooks}</div>;
}

export default BookList;
