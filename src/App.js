import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import News from "./components/News";
import Results from "./components/Results";
import Fixtures from "./components/Fixtures";
import League from "./components/League";
import FacebookNewsFeed from "./components/FacebookNewsFeed";
import Footer from "./components/Footer";
import placeholderimage from "./images/placeholderImage.png";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <main>
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
                <Results />
                <Fixtures />
              </div>
            <div className="column__one">
              {/** <News /> */}

              <League />
              {/** Components still to create 
        <Gallery/>
        */}
            </div>
            <div className="column__two">
              <FacebookNewsFeed />
            </div>
            <div>
              <div id="instafeed-container"></div>
              </div>
          </div>
          {/** END OF HOMEPAGE */}
        </main>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
