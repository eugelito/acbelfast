import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import "./Navbar.scss";
import acbelfastlogo from "../images/acbelfastlogo.png";

function Navbar() {
  return (
    <nav>
        <div className="nav__container">
          <div className="nav__logo--links">
            <div className="nav-main__title">
              <NavLink to="/" className="nav-title">
                <span className="nav-logo">
                  <img src={acbelfastlogo} width="60px" height="60px"></img>
                </span>
              </NavLink>
            </div>

            <ul className="nav-links">
              <li>
                <NavLink to="/" activeClassName="active">HOME</NavLink>
              </li>
              <li>
                <NavLink to="/squads" activeClassName="active">SQUADS</NavLink>
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
              <li className="fixtures__dropdown"> 
              {/** <div className="dropdown">*/}  
                <NavLink to="/fixtures" activeClassName="active" >
                  FIXTURES <i className="nav-caret fas fa-caret-down"></i>
                </NavLink>
                 <div className="results__expand">
                  <NavLink to="/results">RESULTS</NavLink>
                </div> 
                {/* </div> */}
              </li>
              {/**    <ul className="sub-menu dropdown-menu">
            <li className="nav-item">
            <a href="#results">Results</a>
            </li>
</ul>*/}
              <li>
                <NavLink to="/contact" activeClassName="active">CONTACT</NavLink>
              </li>
              <li>
                <a
                  href="https://www.kitlocker.com/yourclub/club/ac-belfast"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SHOP
                </a>
              </li>
            </ul>
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
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;
