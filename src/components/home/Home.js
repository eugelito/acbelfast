import React, { useEffect } from "react";
//import News from "./components/News";
import Result from "../Result";
import Fixture from "../Fixture";
import League from "../League";
import FacebookNewsFeed from "../FacebookNewsFeed";
import placeholderimage from "../../images/placeholderImage.png";
import Header from "../Header";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { feed } from "../../components/instafeed-config";

const Home = () => {
  const navigate = useNavigate();

  const navigateToContact = () => navigate("/Contact");

  // useEffect(() => {
  //   feed.run();
  // }, []);

  return (
    <>
      <Header />
      {/** HOMEPAGE */}
      <div className="container__about">
        <div className="container--centered">
          <div className="about__founded">
            <h2>Athletic Club Belfast</h2>
            <span>Est. 2021</span>
          </div>
          <div>
            <p className="about__description">
              Senior men's amateur football with a first team in the Belfast &
              District Football League (Division 2) and an over 35s team in the
              Emerge Invitational League Championship.
            </p>
            <div className="training__schedule">
              <strong>Train with Us</strong>
              <br />
              <ul>
                <li>
                  <i className="fab fas fa-clock" aria-hidden="true"></i>{" "}
                  <span> Tuesdays, 8:30 pm - 10:00 pm</span>
                </li>
                <li>
                  <i className="fab fas fa-home" aria-hidden="true"></i>{" "}
                  <span style={{ fontSize: "0.9 rem" }}>at</span>{" "}
                  <a
                    href="https://maps.app.goo.gl/FcVVov7sN7AkJQZ28"
                    target="_blank"
                    style={{ color: "#fff", textUnderlineOffset: "0.25rem" }}
                  >
                    Ozone Complex 3G, Ormeau Embankment, Belfast BT6 8LT
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <button
              className="BlueBtn"
              type="button"
              onClick={navigateToContact}
            >
              Get in touch
            </button>
          </div>
        </div>
      </div>
      {/*  <div className="container__sponsors">
      <div className="container--centered sponsors__centered">
          <b className="container__divider">OUR SPONSORS</b>
          <ul className="footer__sponsors">
            <li>
              <img
                src={placeholderimage}
                style={{ width: "50px", height: "50px" }}
                alt="placeholderImage"
              />
            </li>
            <li>
              <img
                src={placeholderimage}
                style={{ width: "50px", height: "50px" }}
                alt="placeholderImage"
              />
            </li>
            <li>
              <img
                src={placeholderimage}
                style={{ width: "50px", height: "50px" }}
                alt="placeholderImage"
              />
            </li>
          </ul>
        </div> 
      </div>*/}
      <div className="container">
        <div className="column__results__fixtures">
          <Fixture />
          <Result />
        </div>
        <div className="column__one">
          {/** <News /> */}
          <League />
        </div>
        <div className="column__two">
          <FacebookNewsFeed />
        </div>
        {/* <div>
          <div className="row__social">
            <h2 className="instafeed__heading">
              Follow us on{" "}
              <i className="fab fa-instagram fa" aria-hidden="true"></i>{" "}
              Instagram <br />
              @acbelfast
            </h2>
            <br />
            <div id="instafeed-container"></div>
          </div>
        </div> */}
      </div>
      {/** END OF HOMEPAGE */}
    </>
  );
};

export default Home;
