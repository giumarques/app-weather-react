import logo from "./logo.svg";
import "./App.css";
import Weather from "./Weather";
import "./Weather.css";


function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather app</h1>
          <Weather defaultCity="London"/>
          <footer>
            This project was coded by{" "}
            <a
              href="https://github.com/giumarques/app-weather-react"
              target="_blank" className="footer"
            >
              open-sourced on GitHub
            </a>
          </footer>
        </header>
      </div>
    </div>
  );
}

export default App;
