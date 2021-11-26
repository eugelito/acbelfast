import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./Navbar.scss";
import acbelfastlogo from "../images/acbelfastlogo.png";

function Navbar() {
  return (
    <nav>
      <div className="nav__hr">
        <div className="nav__container">
          <div className="nav__logo--links">
          <div className="nav-main__title">
            <a
              className="nav-title"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="nav-logo">
                <img src={acbelfastlogo} width="75px" height="70px"></img>
              </span>
            </a>
          </div>
          <Router>
            <ul className="nav-links">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/squad">SQUAD</Link>
              </li>
              {/** 
          <li className="nav-sublinks">
            {" "}
            <a>First team</a>
          </li>
          <li>
            <a>Over 35's</a>
          </li>
  </li>*/}
              <li>
                <Link to="/fixtures">FIXTURES</Link>
              </li>
              {/**    <ul className="sub-menu dropdown-menu">
            <li className="nav-item">
            <a href="#results">Results</a>
            </li>
</ul>*/}
              <li>
                <Link to="/contact">CONTACT</Link>
              </li>
              <li>
                <a href="https://www.kitlocker.com/yourclub/club/ac-belfast" target="_blank" rel="noopener noreferrer">SHOP</a>
              </li>
            </ul>
          </Router>
          </div>
          <ul className="nav-social">
            <li>
              <a
                href="https://www.facebook.com/athleticclubbelfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/acbelfast/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ACBelfast"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter fa-2x" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="mailto:athleticclubbelfast@gmail.com">
                <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
