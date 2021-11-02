import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Squad</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

       <a className="nav-title" href="#">AC Belfast</a>

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
            href="mailto:eugelito@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
