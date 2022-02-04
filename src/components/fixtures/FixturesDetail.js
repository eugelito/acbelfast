import React from "react";
import FixtureData from "../../fixtureData.json";
import "./Fixtures.scss";



const FixturesDetail = ({isHomePageFixture}) => {
  return (
    <div>

    { FixtureData.map(fixture => {
      return(
        <>
        <div className="match__details" key={ fixture.id }>
        <b className="match__date">{ fixture.date } { fixture.time }</b>
        <p className="match__competition">
          <b>{ fixture.competition }</b> at <b>{ fixture.venue }</b>
        </p>{" "}
        <br />
      </div>
      <div className="match__teams">
        <img src={`${ fixture.homeTeamImageUrl }`} width="75px" height="70px"></img>
        <h4 className={isHomePageFixture ? 'match__teams--name' : 'match__result'}>{ fixture.homeTeamName } v { fixture.awayTeamName }</h4>
        <img src={`${ fixture.awayTeamImageUrl }`}width="75px" height="70px"></img>
      </div>
      </>
      )
    } )}
    </div>
  );
};

export default FixturesDetail;
