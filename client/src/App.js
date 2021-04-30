import "./App.css";
import MaterialApp from "./MaterialTut/MaterialApp";
import { store } from "./MaterialTut/lib/userStore";
import { StoreProvider } from "easy-peasy";

function App() {
  return (
    <div className="App">
      <StoreProvider store={store}>
        <MaterialApp />
      </StoreProvider>
    </div>
  );
}

export default App;
