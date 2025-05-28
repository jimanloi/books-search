import type { Book } from "../types";
import "./Books.css";
import defaultBookCover from "../assets/defbookcover.jpg";

const BookCard = ({ book }: { book: Book }) => {
  return (
    <div key={book.key} className="book-container">
      <h5>{book.title}</h5>
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : defaultBookCover
        }
        alt={book.key}
        className="book-cover"
      />
      <p>
        {book.author_name?.join(", ") || "Unknown Author"}{" "}
        <span>
          <small>{book.first_publish_year}</small>
        </span>
      </p>
    </div>
  );
};

export default BookCard;
