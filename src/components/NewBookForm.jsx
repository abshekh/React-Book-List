import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  // const { addBook } = useContext(BookContext);
  const { dispatch: dispatchBooks } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // addBook({ title, author });
    dispatchBooks({
      type: 'ADD_BOOK', newBook: {
        title, author
      }
    });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default NewBookForm;
