import "./Navbar.scss";
import acbelfastlogo from "../images/acbelfastlogo.png";

function Navbar() {
  return (
    <nav className="nav__container">
      <div className="nav-main__title">
        <a className="nav-title" href="#">
          <span className="nav-logo">
            <img src={acbelfastlogo} width="75px" height="70px"></img>
          </span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">HOME</a>
        </li>
        <li>
          <a href="#squad">SQUAD</a>
          {/** 
          <li className="nav-sublinks">
            {" "}
            <a>First team</a>
          </li>
          <li>
            <a>Over 35's</a>
          </li>
  </li>*/}
        </li>
        <li>
          <a href="#fixtures">FIXTURES</a>
        </li>
        <li>
          <a href="#results">RESULTS</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
      <ul className="nav-social">
        <li>
          <a
            href="https://www.instagram.com/acbelfast/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-instagram fa-2x" aria-hidden="true"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.facebook.com/athleticclubbelfast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-facebook fa-2x" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ACBelfast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="mailto:athleticclubbelfast@gmail.com">
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      <hr className="nav__hr" />
    </nav>
  );
}

export default Navbar;
