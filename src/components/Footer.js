import acbelfastlogo from "../images/acbelfastlogo.png";

const currentYear = new Date().getFullYear();

const Footer = () => { 
  return (
    <footer>
    <div className="footer">
      <div className="footer__logo__about"> 
      <img className="footer__logo" src={acbelfastlogo} width="50px" height="50px"></img>
      <div className="footer__about--section">
        <h3 className="footer__heading">Athletic Club Belfast</h3>
        <b>Billy Neill Soccer Centre of Excellence</b><br/>
        <span>341 Comber Rd</span><br/>
        <span>Belfast</span><br/>
        <span>BT16 1RQ</span>
        </div></div>
      <div className="footer__socials--section">
      <h3>Connect with us on</h3>
      <ul className="footer__socials">
        <br />
        <li>
          <a
            href="https://www.facebook.com/athleticclubbelfast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook fax" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/acbelfast/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram fa" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ACBelfast"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="mailto:athleticclubbelfast@gmail.com">
            <i className="fa fa-envelope fa" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
      </div>
  
    </div>
    <div className="footer__designed">
        <a
          href="https://eugelito.com"
          target="_blank"
          rel="noopener noreferrer"
        >
           &copy;
          {currentYear}{" "} Designed and developed by Euge
        </a>
      </div>
    </footer>
  );
};

export default Footer;
