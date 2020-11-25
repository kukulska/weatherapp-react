import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Coder from "./Coder";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="wrapper">
            <div className="row">
              <Search />
              <Forecast />
            </div>
          </div>
          <Coder />
        </div>
      </div>
    </div>
  );
}

export default App;
