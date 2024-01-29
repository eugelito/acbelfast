import React from "react";
import moment from "moment";
import ClubLogoSwitch from "../ClubLogoSwitch";

const FixtureItem = ({ fixture, isHomePageFixture, onDelete, isLastItem }) => {
  return (
    <React.Fragment>
      <div className="match__details">
        <p className="match__competition">
          <b>{fixture.competition}</b> <br />
          <br />
        </p>
        <b className="match__date">
          {moment(
            new Date(
              fixture.dateTime.seconds * 1000 +
                fixture.dateTime.nanoseconds / 1000000
            )
          ).format("ddd Do MMM, HH:mm")}
        </b>
        <p>{fixture.venue}</p>
        <br />
      </div>
      <div className="match__teams">
        <img
          src={ClubLogoSwitch(fixture.homeTeamName)}
          width="75px"
          height="70px"
        ></img>
        <h4
          className={isHomePageFixture ? "match__teams--name" : "match__result"}
        >
          {fixture.homeTeamName} <br />v<br /> {fixture.awayTeamName}
        </h4>
        <img
          src={ClubLogoSwitch(fixture.awayTeamName)}
          width="75px"
          height="70px"
        ></img>
      </div>
      {onDelete && (
        <button className="deleteBtn" onClick={() => onDelete(fixture.id)}>
          Delete
        </button>
      )}
      {!isLastItem && <hr className="match__divider" />}
    </React.Fragment>
  );
};

export default FixtureItem;
