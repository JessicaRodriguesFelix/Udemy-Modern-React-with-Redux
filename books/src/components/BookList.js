import BookShow from './BookShow'

function BookList({ booksList }) {
  const renderedBooks = booksList.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
