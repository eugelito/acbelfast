import React from "react";
import "./Fixtures.scss";
import acbelfastlogo from "../../images/acbelfastlogo.png";
import southsidelogo from "../../images/southsidelogo.jpeg";

const Fixtures = () => {
  return (
    <div className="container__fixtures">
        <div className="container">
      <h1>Fixtures</h1>
      <div className="card__container card__fullWidth">
        <div className="card">
          <div className="match__details">
            <h3 className="match__dateTime">Friday 20 January 2022</h3>{" "}
            <b>14:00 PM</b>
            <p className="match__competition">
              <b>League Match</b> at <b>Lough Moss</b>
            </p>{" "}
            <br />
          </div>
          <div className="match__teams">
            <img src={acbelfastlogo} width="75px" height="70px"></img>
            <h4 className="match__result">AC Belfast v Southside II</h4>
            <img src={southsidelogo} width="75px" height="70px"></img>
          </div>
</div></div>

          <div className="card__container card__fullWidth">
        <div className="card">
          <div className="match__details">
            <h3 className="match__dateTime">Friday 20 January 2022</h3>{" "}
            <b>14:00 PM</b>
            <p className="match__competition">
              <b>League Match</b> at <b>Lough Moss</b>
            </p>{" "}
            <br />
          </div>
          <div className="match__teams">
            <img src={acbelfastlogo} width="75px" height="70px"></img>
            <h4 className="match__result">AC Belfast 35s v Southside II</h4>
            <img src={southsidelogo} width="75px" height="70px"></img>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Fixtures;
