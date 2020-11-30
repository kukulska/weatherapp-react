import "./App.css";
import Weather from "./Weather";
import Coder from "./Coder";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="content">
          <div className="wrapper">
            <Weather />
          </div>
          <Coder />
        </div>
      </div>
    </div>
  );
}

export default App;
