import React from 'react'
//import News from "./components/News";
import Result from "../Result";
import Fixture from "../Fixture";
import League from "../League";
import FacebookNewsFeed from "../FacebookNewsFeed";
import placeholderimage from "../../images/placeholderImage.png";
import Header from "../Header";


const Home = () => {
    return (
        <>
        <Header/>
             {/** HOMEPAGE */}
             <div className="container__sponsors">
                <div className="container__sponsors--centered">
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
                  <div id="instafeed-container"></div>
                </div>
              </div>
              {/** END OF HOMEPAGE */}
        </>
    )
}

export default Home
