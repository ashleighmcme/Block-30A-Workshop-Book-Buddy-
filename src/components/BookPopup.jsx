import Popup from 'reactjs-popup';

export default function BookPopup(book,showDetails) {
    console.log(showDetails);
    return (
        <>
                {showDetails && (
                    <div className="popup" style={{visibility: showDetails ? 'visible' : 'hidden'}}>
                        <div className="popup-content">
                            <h2>{book.title}</h2>
                            <p>Author: {book.author}</p>
                            <p>Description: {book.description}</p>
                            <img src={book.coverimage} alt={book.title}/>
                        </div>
                    </div>
                )}

        </>
    );
}
