import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          We Build Sites.
        </p>
        <a
          className="App-link"
          href = "mailto:order@re-coders.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Take one!
        </a>
      </header>
    </div>
  );
}

export default App;
