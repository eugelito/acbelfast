import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import "./Navbar.scss";
import acbelfastlogo from "../images/acbelfastlogo.png";
import { auth } from "../firebase-config";

function Navbar() {
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logoutAccount = async () => {
    await signOut(auth);
  };

  return (
    <nav className="new-nav">
      <div class="nav__container">
        <div class="nav__logo--links">
          <div class="nav__logo--link--login">
            <NavLink to="/" className="nav-title">
              <span className="nav-logo">
                <img src={acbelfastlogo} width="60px" height="60px"></img>
              </span>
            </NavLink>
            {!auth.currentUser && (
              <li className="loginList">
                <NavLink to="/login" activeClassName="active">
                  <i className="nav-caret fas fa-user"></i> LOG IN
                </NavLink>
              </li>
            )}
            {auth.currentUser && (
              <li className="signOutList" onClick={logoutAccount}>
                <NavLink to="" activeClassName="active">
                  <i className="nav-caret fas fa-caret-right"></i> SIGN OUT
                </NavLink>
              </li>
            )}
          </div>
          <div class="scrollmenu">
            <NavLink to="/" activeClassName="active">
              HOME
            </NavLink>
            <NavLink to="/squads" activeClassName="active">
              SQUADS
            </NavLink>
            <NavLink to="/fixtures" activeClassName="active">
              FIXTURES
            </NavLink>
            <NavLink to="/results">RESULTS</NavLink>
            <NavLink to="/contact" activeClassName="active">
              CONTACT
            </NavLink>
            <a
              href="https://www.kitlocker.com/yourclub/club/ac-belfast"
              target="_blank"
              rel="noopener noreferrer"
            >
              SHOP
            </a>
            {!auth.currentUser && (
              <NavLink
                to="/login"
                className="loginDesktop"
                activeClassName="active"
              >
                <i className="nav-caret fas fa-user"></i> LOG IN
              </NavLink>
            )}
            {auth.currentUser && (
              <NavLink
                to=""
                className="signOutDesktop"
                activeClassName="active"
                onClick={logoutAccount}
              >
                <i className="nav-caret fas fa-caret-right"></i> SIGN OUT
              </NavLink>
            )}
          </div>
        </div>
      </div>
      {/* <ul className="nav-social">
          <li>
            <a
              href="https://www.facebook.com/acbelfast"
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
        </ul> */}
    </nav>
  );
}

export default Navbar;
