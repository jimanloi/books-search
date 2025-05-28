import "./App.css";
import { toggleTheme } from "./store/themeSlice";
import LightDarkSwitch from "./components/LightDarkSwitch";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store/store";
import Form from "./components/Form";
import Books from "./components/Books";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <div className={`app ${theme}`}>
      <LightDarkSwitch
        checked={theme === "dark"}
        onChange={() => dispatch(toggleTheme())}
      />
      <h1>Books Search</h1>
      <Form />
      <Books />
    </div>
  );
}

export default App;
