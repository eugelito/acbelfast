import React from 'react'
//import News from "./components/News";
import Result from "../Result";
import Fixture from "../Fixture";
import League from "../League";
import FacebookNewsFeed from "../FacebookNewsFeed";
import placeholderimage from "../../images/placeholderImage.png";
import Header from "../Header";
import "./Home.scss";
import { useNavigate } from 'react-router-dom';



const Home = () => {  
  const navigate = useNavigate()

  const navigateToContact = () => navigate('/Contact');

    return (
      <>
        <Header />
        {/** HOMEPAGE */}
        <div
          className="container__about">
          <div className="container--centered">
            <div className="about__founded">
            <h2>
              Athletic Club Belfast
            </h2>
            <span>Est. 2021</span>
            </div>
            <div> 
            <p className="about__description">
              Senior Men's Amateur Football Club based in Belfast, Northern Ireland. The club have a firsts and an over 35s team playing in the TBA and Emerge Invitational League respectively. Both teams are currently in the look out for high quality players.
            </p>                 <br/>
     <button className="getInTouchBtn" type="button" onClick={navigateToContact}>Get in touch</button>

          </div></div>

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