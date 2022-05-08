import './App.css';
import { Piano } from './components/Piano.js';

function App() {
  return (
    <div className="App">
        <h1 id='top-header'>Virtual Piano</h1>
        <br/><br/><hr/><br/><br/>
        <div className="top-letter">
            <span>d</span>
            <span>d</span>
            <span>d</span>
            <span>d</span>
            <span>d</span>
        </div>
      <header className="App-header">
        <Piano />
      </header>
        <div className="top-letter">
            <span>Z</span>
            <span>X</span>
            <span>C</span>
            <span>V</span>
            <span>B</span>
            <span>N</span>
            <span>M</span>
        </div><br/><br/>
        <hr/>
    </div>
  );
}

export default App;
