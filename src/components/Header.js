import "./Header.scss";
import "../App.css";
import Navbar from "./Navbar";
import Lion from "../images/lion.png";

function Header() {
  return (
      <header className="">
        <Navbar/>
        <div class="container">
          <h1>Founded in 2022, Athletic Club Belfast is a new Football Club for all based in Belfast, Northern Ireland.</h1>
          <img src={Lion} alt="logo" />
        </div>
          {/* <img src={clubLogo} className="App-logo" alt="logo" />
        <div class="follow-us">
          <b>Follow us for the latest news on the club launch</b>
          <hr />
        </div>
        <div className="social-links">
          <a
            href="https://www.instagram.com/acbelfast/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
          <a
            href="https://www.facebook.com/athleticclubbelfast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook fa-2x" aria-hidden="true"></i>
          </a>
  </div>*/}
        </header> 
           
  )
}

export default Header;
