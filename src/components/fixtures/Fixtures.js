import React from "react";
import "./Fixtures.scss";
import acbelfastlogo from "../../images/acbelfastlogo.png";
import southsidelogo from "../../images/southsidelogo.jpeg";
import FixturesDetail from "./FixturesDetail";

const Fixtures = () => {
  // const isFixturesPage = true;
  // isFixturesPage

  return (
    <div className="container__fixtures">
      <h1 className="page__heading">Fixtures</h1>
      <div className="container">
        <div className="card__container card__threeQuarterWidth">
          <div className="card">
            <FixturesDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
