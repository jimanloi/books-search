import type { Book } from "../types";
import "./Books.css";
import defaultBookCover from "../assets/defbookcover.jpg";
import { useState } from "react";

import { FaHeart } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const BookCard = ({ book }: { book: Book }) => {
  const [favorite, setFavorite] = useState(false);

  const favoriteHandler = () => {
    setFavorite(!favorite);
  };
  return (
    <div key={book.key} className="book-container">
      <div className="book-title">
        <h6>{book.title}</h6>
      </div>
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : defaultBookCover
        }
        alt={book.key}
        className="book-cover"
      />
      <p className="book-description">
        <span
          style={{
            maxWidth: "150px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {book.author_name[0] || "Unknown Author"}{" "}
        </span>
        <span>
          <small>{book.first_publish_year}</small>
        </span>
        <button
          onClick={favoriteHandler}
          style={{
            background: "none",
            color: "inherit",
            border: "none",
            padding: 0,
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
          }}
        >
          {favorite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </p>
    </div>
  );
};

export default BookCard;
