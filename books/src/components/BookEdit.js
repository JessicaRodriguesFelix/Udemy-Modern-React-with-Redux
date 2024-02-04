import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({ bookEdit, onSubmit }) {
  const [title, setTitle] = useState(bookEdit.title);

 const { handleEditBookById } = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    handleEditBookById(bookEdit.id, title);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} required/>
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
