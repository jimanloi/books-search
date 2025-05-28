import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { setQuery } from "../store/querySlice";

const Form = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.query.searchTerm);
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <form
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
    >
      <input
        type="text"
        value={searchTerm}
        placeholder="search for books"
        className={`form-control ${
          theme === "dark" ? "bg-secondary text-white" : "bg-light text-dark"
        }`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setQuery(e.target.value))
        }
      />
    </form>
  );
};
export default Form;
