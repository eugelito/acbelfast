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
      <div className="nav__container">
        <div className="nav__logo--links">
          <div className="nav__logo--link--login">
            <NavLink to="/" className="nav-title">
              <span className="nav-logo">
                <img src={acbelfastlogo} width="60px" height="60px"></img>
              </span>
            </NavLink>
            {/* {!auth.currentUser && (
              <li className="loginList">
                <NavLink to="/login" activeclassname="active">
                  <i className="nav-caret fas fa-user"></i> LOG IN
                </NavLink>
              </li>
            )} */}
          </div>
          <div className="scrollmenu">
            <NavLink to="/" activeclassname="active">
              home
            </NavLink>
            <NavLink to="/squads" activeclassname="active">
              squads
            </NavLink>
            <NavLink to="/fixtures" activeclassname="active">
              fixtures
            </NavLink>
            <NavLink to="/results">results</NavLink>
            <NavLink to="/contact" activeclassname="active">
              contact
            </NavLink>
            <a
              href="https://www.kitlocker.com/yourclub/club/ac-belfast"
              target="_blank"
              rel="noopener noreferrer"
            >
              shop
            </a>
            {/* {!auth.currentUser && (
              <NavLink
                to="/login"
                className="loginDesktop"
                activeclassname="active"
              >
                <i className="nav-caret fas fa-user"></i> LOG IN
              </NavLink>
            )} */}
            {auth.currentUser && (
              <NavLink
                to="/signout"
                className="signOutDesktop"
                onClick={logoutAccount}
              >
                <i className="nav-caret fas fa-caret-right"></i> sign out
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
