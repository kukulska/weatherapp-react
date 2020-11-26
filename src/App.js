import "./App.css";
import Search from "./Search";
import Coder from "./Coder";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="wrapper">
            <Search />
          </div>
          <Coder />
        </div>
      </div>
    </div>
  );
}

export default App;
