import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setQuery } from "../store/querySlice";
import { useState } from "react";

const Form = () => {
  const dispatch = useDispatch();
  //const searchTerm = useSelector((state: RootState) => state.query.searchTerm);
  const [input, setInput] = useState("");
  const theme = useSelector((state: RootState) => state.theme.mode);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setQuery(input || "c"));
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        placeholder="search for books"
        className={`form-control ${
          theme === "dark" ? "bg-secondary text-white" : "bg-light text-dark"
        }`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
    </form>
  );
};
export default Form;
