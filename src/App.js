import clubLogo from './images/acbelfast.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={clubLogo} className="App-logo" alt="logo" />
        <div class="follow-us">
        <b>Follow us for the latest news on the club launch</b>
        <hr/>
        </div>
        <div className="social-links">
        <a href="https://www.instagram.com/acbelfast/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></a>
        <a href="https://www.facebook.com/athleticclubbelfast" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook fa-2x" aria-hidden="true"></i></a>
        </div>
      </header>
    </div>
  );
}

export default App;
