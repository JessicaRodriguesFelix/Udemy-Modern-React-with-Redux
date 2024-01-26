import BookShow from './BookShow'

function BookList({ booksList, onDelete, onEdit}) {
  const renderedBooks = booksList.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit}/>;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
