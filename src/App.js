import { useEffect } from "react";
import { loadGames } from "./redux/actions/gamesActions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, []);
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
