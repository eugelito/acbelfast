import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHome,
  faMap,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact__container">
     <h1 className="page__heading">Contact</h1>
      <div className="container">
        <div className="column">
        <div className="">
          <div>
            <h3>
              <FontAwesomeIcon
                icon={faPhone}
                color={"#fff"}
                flip="horizontal"
              />{" "}
              Telephone
            </h3>
            <a href="tel: 028999999999">028 9999 9999</a>
          </div>
          <div className="contact__email">
            <h3>
              {" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                color={"#fff"}
                flip="horizontal"
              />{" "}
              Email
            </h3>
            <a href="mailto:athleticclubbelfast@gmail.com?subject=Athletic Club Belfast Contact Form">athleticclubbelfast@gmail.com</a>
          </div>{" "}

          <div className="contact__address">
          <h3>
              {" "}
              <FontAwesomeIcon
                icon={faHome}
                color={"#fff"}
                flip="horizontal"
              />{" "}
              Address
            </h3>
          <a href="https://goo.gl/maps/8J8viGQuBmpEL5js8" target="_blank" rel="noopener">Billy Neill Soccer Centre of Excellence<br/>
341 Comber Rd<br/>
Belfast<br/>
BT16 1RQ</a>
            
          </div>
        </div>
        {/* <form className="form">
          <div>
            <label>Full name:</label>
            <input
              type="text"
              placeholder="Please enter your full name"
              minLength={2}
              maxLength={50}
              required
            />

            <label>Email address:</label>
            <input
              type="email"
              placeholder="Please enter your email address"
              minLength={3}
              maxLength={64}
              required
            />

            <label>Message:</label>
            <textarea
              type="text"
              placeholder="Please enter your message"
              minLength={5}
              maxLength={4000}
              rows="6"
              required
            ></textarea>

            <input type="submit" id="submitBtn" className="submitBtn" />
          </div>
        </form> */}
  {/* //Google Maps

      <div className="">
          <div>
          <div className="contact__address">
          <h3>
              {" "}
              <FontAwesomeIcon
                icon={faMap}
                color={"#fff"}
                flip="horizontal"
              />{" "}
              Locate us on Google Maps
            </h3>

      </div>
      </div>
      </div>*/} 
      </div> 
    </div>
    </div>
  );
};

export default Contact;
