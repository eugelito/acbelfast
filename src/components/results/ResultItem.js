import React from "react";
import moment from "moment";
import ClubLogoSwitch from "../ClubLogoSwitch";

const ResultItem = ({ result, onDelete, isLastItem }) => {
  return (
    <React.Fragment>
      <div className="match__details">
        <p className="match__competition">
          <span className="match__date">
            {moment(
              new Date(
                result.dateTime.seconds * 1000 +
                  result.dateTime.nanoseconds / 1000000
              )
            ).format("ddd Do MMM")}
          </span>
          <b>{result.competition}</b>
        </p>
        <span className="match__fullTime">Full Time</span>
        <h4 className="match__score">
          {result.homeTeamScore} - {result.awayTeamScore}
        </h4>
        <br />
      </div>
      <div className="match__teams">
        <div className="match__teamOne">
          <img
            src={ClubLogoSwitch(result.homeTeamName)}
            width="75px"
            height="70px"
          ></img>
          <h4 className="match__result">{result.homeTeamName}</h4>
        </div>
        <div className="match__teamTwo">
          <img
            src={ClubLogoSwitch(result.awayTeamName)}
            width="75px"
            height="70px"
          ></img>
          <h4 className="match__result">{result.awayTeamName}</h4>
        </div>
      </div>{" "}
      {result.goalscorer && (
        <>
          <br />
          <div className="goalscorer">
            Goalscorers: <b>{result.goalscorer}</b>
          </div>
        </>
      )}
      {onDelete && (
        <button className="deleteBtn" onClick={() => onDelete(result.id)}>
          Delete
        </button>
      )}
      {!isLastItem && <hr className="match__divider" />}
    </React.Fragment>
  );
};

export default ResultItem;
