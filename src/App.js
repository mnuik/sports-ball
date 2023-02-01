import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div>
        <h4>SportsBall Lounge</h4>
      </div>
      </header>
      <body>
        <div class="topnav">
          <a href="#sports">Sports</a>
          <a href="#tables">Tables</a>
          <a href="#finland">Finland NTs</a>
          <a href="#eesti">Eesti NTs</a>
          <a href="#arsenal">Arsenal</a>
          <a href="#manu">ManU</a>
        </div>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to SportsBall Lounge!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reäct
        </a>
      </body>
    </div>
  );
}

export default App;
