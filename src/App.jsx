import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import Account from "./components/Account2";
import Home from "./components/Home";
import Navigations from "./components/Navigations";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  return (
    <Router>
      <div>
        <header>
          <div className="header-content">
            <img src={bookLogo} alt="book logo" className="logo" />
            <h1>Book Buddy</h1>
          </div>
          <Navigations />
        </header>

        {/* <Navigations /> */}
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/account" element={<Account token={token} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
