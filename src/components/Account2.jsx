import React, { useState, useEffect } from "react";

function Account({ token }) {
  const [account, setAccount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const token = sessionStorage.getItem("token");
        console.log("token:", token);
        const response = await fetch(`${API_URL}/users/me`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const info = await response.json();
        if (response.ok) {
          setAccount(info);
        } else {
          throw new Error(
            "Only logged in users can access this.  Please log in or create a new account."
          );
        }
        console.log("info:", info);
        console.log("account:", account);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAccount();
  }, []);

  return (
    <div className="account-container">
      <div className="account">  
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {account && (
        <div>
          <h2>Account Details</h2>
          <p>ID: {account.ID}</p>
          <p>Username: {account.username}</p>
          <p>Email: {account.email}</p>
          {account.books && account.books.length > 0 ? (
            <div>
              <h3>Books</h3>
              <ul>
                {account.books.map((book) => (
                  <li key={book.ID}>{book.title}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No books found, add some now!</p>
          )}
        </div>
      )}
      </div>
    </div>
  );
}

export default Account;
