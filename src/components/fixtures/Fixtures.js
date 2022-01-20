import React from "react";
import "./Fixtures.scss";
import FixturesDetail from "./FixturesDetail";

const Fixtures = () => {

  return (
    <div className="container__fixtures">
      <h1 className="page__heading">Fixtures</h1>
      <div className="container">
        <div className="card__container card__threeQuarterWidth">
          <div className="card">
            <FixturesDetail isHomepageFixture={true}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
