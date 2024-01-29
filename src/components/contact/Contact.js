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
          <div className="container__contact--map">
            {/* <div>
            <h3>
              <FontAwesomeIcon
                icon={faPhone}
                color={"#fff"}
                flip="horizontal"
              />{" "}
              Telephone
            </h3>
            <a href="tel: 028999999999">028 9999 9999</a>
          </div> */}
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
              <a href="mailto:athleticclubbelfast@gmail.com?subject=Athletic Club Belfast Contact Form">
                athleticclubbelfast@gmail.com
              </a>
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
              <a
                href="https://goo.gl/maps/rfd12H9LtycFKuab6"
                target="_blank"
                rel="noopener"
              >
                Mallusk Playing Fields
                <br />
                Newtownabbey
                <br />
                BT36 4RH
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.4426891618277!2d-6.002241884150477!3d54.684237081357516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4861a881bf70bdd1%3A0x59fd6890f820403c!2sCity%20of%20Belfast%20Mallusk%20Playing%20Fields!5e0!3m2!1sen!2suk!4v1672503347316!5m2!1sen!2suk"
              width="600"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              height="400"
              style={{ border: 0, marginBottom: "1rem" }}
              allowFullScreen="true"
              aria-hidden="false"
              tabindex="0"
              id="mapIframe"
            ></iframe>
            <br />
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
