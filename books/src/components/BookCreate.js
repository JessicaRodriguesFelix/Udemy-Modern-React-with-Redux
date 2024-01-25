import { useState } from 'react';

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  // Function to handle changes in the input field
  const handleChange = (event) => {
    // Update the title state with the value from the input field
    setTitle(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the onCreate function passed as a prop with the current title
    onCreate(title);
    // Reset the title state to an empty string after submission
    // input filed will be empty, ready for user's new input
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <lable>Title </lable>
        <input
        className='input'
          value={title}
          onChange={handleChange}
          placeholder="Enter a book name"
        />
        <button className='button'>Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
