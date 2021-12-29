import "./Result.scss";
import "./Card.scss";
import acbelfastlogo from "../images/acbelfastlogo.png";
import southsidelogo from "../images/southsidelogo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Results = () => {
  return (
    <div className="card__container column__half column__half--gap">
      <h2>Results</h2>
      <div className="card card-home">
        <div className="results__title">
        <Link to="/results"><b className="results__title--link">View more results</b></Link>
        </div>
        <div className="match__details">
        <p className="match__competition"><b>League Match</b></p>
        <span className="match__fullTime">Full Time</span>
        </div>
        <div className="match__teams">
        <img src={acbelfastlogo} width="75px" height="70px"></img>
        <h4 className="match__result">AC Belfast 0 - 1 Southside II</h4>
        <img src={southsidelogo} width="75px" height="70px"></img>
        </div>
        <hr className="match__divider"/>
        <div className="match__details">
        <p className="match__competition"><b>League Match</b></p>
        <span>Full Time</span>
        </div>
        <div className="match__teams">
        <img src={acbelfastlogo} width="75px" height="70px"></img>
        <h4 className="match__result">AC Belfast 35s 0 - 1 Southside II</h4>
        <img src={southsidelogo} width="75px" height="70px"></img>
        </div>
      </div>
    </div>
  );
};

export default Results;
