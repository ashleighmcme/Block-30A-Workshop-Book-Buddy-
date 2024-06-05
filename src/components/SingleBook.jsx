
import {useState} from "react";
import BookPopup from "./BookPopup";

function SingleBook({book}) {
    const [showDetails, setShowDetails] = useState(false);
    //const [visibility,setVisibility] = useState('hidden')
    // const [goBack, setGoBac] = useState(null);
    //let popupContainer;
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
            </div>
          </div>
        </>
      );
    }
    
    export default SingleBook;
