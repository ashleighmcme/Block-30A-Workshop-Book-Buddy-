/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog.
 Fetch the book data from the provided API. 
 Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { fetchAllBooks } from "../api";
import { useState, useEffect } from "react";
import SingleBook from "./SingleBook";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetchAllBooks();
        setBooks(response);
      } catch (error) {
        setError("Failed to fetch books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {books && (
        <div className="books">
          {/*<div className="book-list">*/}
            {books.map((book) => (
              <SingleBook key={book.id} book={book} />
            ))}
          {/*</div>*/}
        </div>
      )}
    </div>
  );
}
