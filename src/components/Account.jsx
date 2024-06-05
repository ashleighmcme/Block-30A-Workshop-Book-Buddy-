import { useState, useEffect } from "react";

function Account() {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";
  const [checkedOutBooks, setCheckedOutBooks] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const response = await fetch(`${API_URL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          setError("Please Sign In for Account Details");
        } else {
          const info = await response.json();
          setAccount(info);
          setCheckedOutBooks(info.books);
        }
      } catch (error) {
        setError("Failed to fetch account data");
      } finally {
        setLoading(false);
      }
    };
    fetchAccount();
  }, [token]);

  const returnBook = async (reservationId) => {
    try {
      const response = await fetch(`${API_URL}/reservations/${reservationId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const result = await response.json();
        setCheckedOutBooks((prevBooks) =>
            prevBooks.filter((book) => book.id !== reservationId)
        );
      } else {
        throw new Error(`Failed to return book: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(null);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [error]);

  return (
      <div className="account">
        {loading && (
            <p style={{ color: "green", fontSize: "2rem", fontWeight: "bold" }}>
              Loading...
            </p>
        )}
        {error && (
            <p style={{ color: "red", fontSize: "2rem", fontWeight: "bold" }}>
              {error}
            </p>
        )}
        {account && (
            <div>
              <h2>Account Details</h2>
              <p>Firstname: {account.firstname}</p>
              <p>Lastname: {account.lastname}</p>
              <p>Email: {account.email}</p>
              {checkedOutBooks.length > 0 && (
                  <div>
                    <h2>Checked Out Books</h2>
                    <ul className="checked-out-books">
                      {checkedOutBooks.map((book) => (
                          <li key={book.id}>
                            Title: {book.title}, Author: {book.author}, ID: {book.id}
                            <br />
                            <button onClick={() => returnBook(book.id)}>Return</button>
                          </li>
                      ))}
                    </ul>
                  </div>
              )}
            </div>
        )}
      </div>
  );
}

export default Account;
