import React from 'react'
//import News from "./components/News";
import Result from "../Result";
import Fixture from "../Fixture";
import League from "../League";
import FacebookNewsFeed from "../FacebookNewsFeed";
import placeholderimage from "../../images/placeholderImage.png";
import Header from "../Header";
import "./Home.scss";


const Home = () => {
    return (
      <>
        <Header />
        {/** HOMEPAGE */}
        <div
          className="container__about">
          <div className="container--centered">
            <h2>
              Athletic Club Belfast
            </h2>
            <p className="about--description">
              Founded in 2021, Athletic Club Belfast are a senior men's football club with a firsts and over 35s team based in Belfast, Northern Ireland. Proident officia sunt laborum do consequat occaecat Lorem labore ea nostrud magna ea exercitation nostrud. Proident deserunt proident anim mollit ullamco et nulla nostrud velit cupidatat.
            </p>
          </div>
        </div>
        <div className="container__sponsors">
          <div className="container--centered">
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
            <Result />
            <Fixture />
          </div>
          <div className="column__one">
            {/** <News /> */}
            <League />
          </div>
          <div className="column__two">
            <FacebookNewsFeed />
          </div>
          <div>
            <div class="row__social">
              <h2 className="instafeed__heading">
                <i className="fab fa-instagram fa" aria-hidden="true"></i>{" "}
                Instagram Posts
              </h2>
              <div id="instafeed-container"></div>
            </div>
          </div>
        </div>
        {/** END OF HOMEPAGE */}
      </>
    );
}

export default Home
