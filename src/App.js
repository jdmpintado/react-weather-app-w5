import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Weather Check Application</h1>
        </header>
        <Weather defaultCity="Paris" />
        <footer className="App-footer">
          <p>
            This project was coded by Jessica Pintado and is{" "}
            <a
              href="https://github.com/jdmpintado/react-weather-app-w5"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
