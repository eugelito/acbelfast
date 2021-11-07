import "./Navbar.scss";

function Navbar() {
  return (
    <nav className="nav__contaner">
      <div className="nav-main__title">
        <a className="nav-title" href="#">
          <span className="nav-title--name">AC Belfast</span>
          <span className="nav-est">Est. 2022</span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#squad">Squad</a>
        </li>
        <li>
          <a href="#fixtures">Fixtures</a>
        </li>
        <li>
          <a href="#results">Results</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
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
