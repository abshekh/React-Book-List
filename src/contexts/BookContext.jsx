import React, { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  // const [books, setBooks] = useState([
  //   { title: "name of the wind", author: "patrick rothfuss", id: 1 },
  //   { title: "the final empire", author: "brandon sanderson", id: 2 },
  // ]);

  // const removeBook = (id) => {
  //   setBooks(books.filter(book => book.id !== id));
  // };

  // const addBook = (newBook) => {
  //   newBook.id = Date.now();
  //   setBooks([...books, newBook]);
  // };

  const [books, dispatch] = useReducer(bookReducer, [], () => {
    try {
      const localData = localStorage.getItem('books');
      return localData ? JSON.parse(localData) : [];
    } catch (err) {
      console.log(err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('books', JSON.stringify(books));
    } catch (err) {
      console.log(err);
    }
  }, [books]);


  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
