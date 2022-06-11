import logo from './logo.svg';
import './App.css';
import Button from './Components/Button/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => {console.log('clicked');}} text="click me" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
