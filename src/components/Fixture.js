import "./Fixture.scss";
import acbelfastlogo from "../images/acbelfastlogo.png";
import southsidelogo from "../images/southsidelogo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const Fixture = () => {
  return (
    <div className="card__container column__half">
      <h2>Fixtures</h2>
      <div className="card">
        <div className="results__title">
        <Link to="/fixtures"><b className="results__title--link">View more fixtures</b></Link>
        </div>
        <div className="match__details">
        <h3 className="match__dateTime">Friday 20 January 2022</h3> {' '}
        <b>14:00 PM</b>
        <p className="match__competition"><b>League Match</b> at <b>Lough Moss</b></p> <br/>
        </div>
        <div className="match__teams">
        <img src={acbelfastlogo} width="75px" height="70px"></img>
        <h4 className="match__result">AC Belfast v Southside II</h4>
        <img src={southsidelogo} width="75px" height="70px"></img>
        </div>
        <hr className="match__divider"/>
        <div className="match__details">
        <h3 className="match__dateTime">Friday 20 January 2022</h3> {' '}
        <b>14:00 PM</b>
        <p className="match__competition"><b>League Match</b> at <b>Lough Moss</b></p> <br/>
        </div>
        <div className="match__teams">
        <img src={acbelfastlogo} width="75px" height="70px"></img>
        <h4 className="match__result">AC Belfast 35s v Southside II</h4>
        <img src={southsidelogo} width="75px" height="70px"></img>
        </div>
      </div>
    </div>
  );
};

export default Fixture;
