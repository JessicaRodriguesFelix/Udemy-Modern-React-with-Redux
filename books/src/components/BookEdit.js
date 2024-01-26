import { useState } from "react";

function BookEdit({ bookEdit, onEdit, onSubmit }) {
  const [title, setTitle] = useState(bookEdit.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onEdit(bookEdit.id, title);
    onSubmit()
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">
        Save
      </button>
    </form>
  );
}

export default BookEdit;
