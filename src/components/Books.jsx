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
      {books.length > 0 && (
        <div className="books-container">
          <div className="books">
            {books.map((book) => (
              <SingleBook key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}