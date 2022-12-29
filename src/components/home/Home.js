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
import appStoreLogo from "../../images/appStoreLogo.svg";
import googlePlayLogo from "../../images/googleplayLogo.svg";
import { feed } from "../../components/instafeed-config";

const Home = () => {
  const navigate = useNavigate();

  const navigateToContact = () => navigate("/Contact");

  useEffect(() => {
    feed.run();
  }, []);

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
              Senior Men's Amateur Football Club based in Belfast, Northern
              Ireland. The club have a firsts and an over 35s team playing in
              the Belfast and District Football League (Division 3) and Emerge
              Invitational League (League 1) respectively.
            </p>{" "}
            <div className="training__schedule">
              <strong>Football Training Schedule</strong>
              <br />
              <ul>
                <li>
                  {" "}
                  <i className="fab fas fa-home" aria-hidden="true"></i> Ozone
                  Complex, Ormeau Embankment, Belfast BT6 8LT
                </li>
                <li>
                  {" "}
                  <i className="fab fas fa-clock" aria-hidden="true"></i>{" "}
                  <span>Tuesdays 8:45pm to 10pm</span>
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
      <div className="container__sponsors">
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
      </div>
      <div className="container">
        <div className="column__results__fixtures">
          <Fixture />
          <Result />
        </div>
        <div className="column__one">
          {/** <News /> */}
          <League />
          <p className="appStoreHint">
            Download the Football NI app to stay up to date with the first team
            fixtures, results, team line-ups, match events and other statistics.
            <br />
            <br />
            The app can be downloaded now by visiting the{" "}
            <a href="https://apps.apple.com/gb/app/football-ni/id1636686499">
              App Store
            </a>{" "}
            or{" "}
            <a href="https://play.google.com/store/apps/details?id=de.analyticom.cometlive.ifa&hl=en&gl=US">
              Google Play Store
            </a>
            .
          </p>
          <div className="row">
            <a href="https://apps.apple.com/gb/app/football-ni/id1636686499">
              <img
                className="appStoreLogo"
                src={appStoreLogo}
                alt="Download app store logo"
              />
            </a>{" "}
            <a href="https://play.google.com/store/apps/details?id=de.analyticom.cometlive.ifa&hl=en&gl=US">
              <img
                className="appStoreLogo"
                src={googlePlayLogo}
                alt="Download google play logo"
              />
            </a>
          </div>
        </div>
        <div className="column__two">
          <FacebookNewsFeed />
        </div>
        <div>
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
        </div>
      </div>
      {/** END OF HOMEPAGE */}
    </>
  );
};

export default Home;
