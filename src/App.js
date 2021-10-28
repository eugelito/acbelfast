import clubLogo from './images/acbelfast.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clubLogo} className="App-logo" alt="logo" />
        <b>Follow our instagram for the latest news on the club launch</b>
        <br/>
        <a href="https://www.instagram.com/acbelfastfc/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
      </header>
    </div>
  );
}

export default App;
