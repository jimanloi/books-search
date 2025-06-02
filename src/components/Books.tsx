import { useGetBooksQuery } from "../api/apiSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import type { Book } from "../types";
import BookCard from "./BookCard";
import "./Books.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Books = () => {
  const query = useSelector((state: RootState) => state.query.searchTerm);
  const { data, isLoading } = useGetBooksQuery({ query });

  // if (error) return <p>Error fetching books</p>;

  console.log(data);

  return (
    <div className="books-container">
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : data?.docs?.length ? (
        data.docs.map((book: Book) => <BookCard key={book.key} book={book} />)
      ) : (
        "No books found"
      )}
    </div>
  );
};

export default Books;
