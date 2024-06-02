import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import Account from "./components/Account";
import Home from "./components/Home";
import Navigations from "./components/Navigations";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
// import SingleBook from "./components/SingleBook";
// import { useState } from "react";

function App() {
  // const [token, setToken] = useState(null);

  return (
    <Router>
      <div>
        <header>
          <img src={bookLogo} alt="book logo" className="logo" />
          <h1>Book Buddy</h1>
        </header>

        <Navigations />
        <Routes>
          <Route path="/Home" element={<Home to="/Home" />} />
          <Route path="/books" element={<Books />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/Home" />} />
          {/* <Route path="/books/:id" element={<SingleBook />} /> */}
        </Routes>
      </div>

    </Router>
  );
}

export default App;
