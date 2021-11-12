import "./Header.scss";
import "../App.css";
import Navbar from "./Navbar";


function Header() {
  return (
      <header>
        <Navbar/>
        <div className="header__container container">
          <h1 className="hdg-founded">Founded in 2022, Athletic Club Belfast is a</h1>
          <h1 className="hdg--based">new Football Club for all based in Belfast, Northern Ireland.</h1>
        </div>
        </header> 
           
  )
}

export default Header;
