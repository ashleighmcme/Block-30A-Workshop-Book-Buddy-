
import {useState} from "react";
import Account from "./Account";
import { useNavigate } from "react-router-dom";

function SingleBook({book}) {
    const [showDetails, setShowDetails] = useState(false);
    const token = sessionStorage.getItem("token");

    const navigate = useNavigate();
    const goToAccounts=()=>{
        navigate("/account");
    }


    return (
        <>
          <div className="single-book">
            <div className="single-book-button">
              <h2>{book.title}</h2>
              <button
                onClick={() => {
                  setShowDetails(!showDetails);
                  /*BookPopup(book,!showDetails);*/
                }}
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
              {showDetails && (
                <div className="popup" style={{ visibility: showDetails ? 'visible' : 'hidden' }}>
                  <h1>{book.title}</h1>
                  <p>Author: {book.author}</p>
                  <p>Description: {book.description}</p>
                  <img src={book.coverimage} alt={book.title} />
                  <button id="close-popup" onClick={() => setShowDetails(!showDetails)}>
                    X
                  </button>
                </div>
              )}
            <div className="single-book">
                <h2>{book.title}</h2>
                <button onClick={() => {setShowDetails(!showDetails);

                }}>
                    {showDetails ? "Hide Details" : "Show Details"}
                </button>
                {showDetails && (
                    <div className="popup" style={{visibility: showDetails ? 'visible' : 'hidden'}}>

                        <h1>{book.title}</h1>
                        <p>Author: {book.author}</p>
                        <p>Description: {book.description}</p>
                        <img src={book.coverimage} alt={book.title}/>
                        <button id="checkout-button" style={{visibility: token ? 'visible' : 'hidden'}} onClick={()=>goToAccounts()}>
                            Go To Account Checkout
                        </button>
                        <button id="close-popup" onClick={() => setShowDetails(!showDetails)}>
                            X
                        </button>
                    </div>
                )}
            </div>
          </div>
        </>
      );
    }
    
    export default SingleBook;
