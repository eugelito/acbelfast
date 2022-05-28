import React from "react";
import ResultsData from "../../resultData.json";
import './Results.scss'

const ResultsDetail = ({ showAllResults }) => {
  return (
    <div>
      {!showAllResults ? (
        <>
          {ResultsData.slice(0, 2).map((result) => {
            return (
              <>
                  <div className="match__details">
                  <p className="match__competition">
                  <span className="match__date">{result.date}</span>
                    <b>{result.competition}</b>
                  </p>
                  <span className="match__fullTime">Full Time</span>
                  <h4 className="match__score">
                    {result.homeTeamScore} - {result.awayTeamScore}
                  </h4>
                  <br/>
                </div>
                <div className="match__teams">
                  <div className="match__teamOne">
                    <img
                      src={`${result.homeTeamImageUrl}`}
                      width="75px"
                      height="70px"
                    ></img>
                    <h4 className="match__result">{result.homeTeamName}</h4>
                  </div>
                  <div className="match__teamTwo">
                    <img
                      src={`${result.awayTeamImageUrl}`}
                      width="75px"
                      height="70px"
                    ></img>
                    <h4 className="match__result">{result.awayTeamName}</h4>
                  </div>
                </div>{" "}
                <hr className="match__divider" />

              </>
            );
          })}
        </>
      ) : (
        <>
          {" "}
          {ResultsData.map((result) => {
            return (
              <>
                <div className="match__details">
                  <p className="match__competition">
                  <span className="match__date">{result.date}</span>
                    <b>{result.competition}</b>
                  </p>
                  <span className="match__fullTime">Full Time</span>
                  <h4 className="match__score">
                    {result.homeTeamScore} - {result.awayTeamScore}
                  </h4>
                  <br/>
                </div>
                <div className="match__teams">
                  <div className="match__teamOne">
                    <img
                      src={`${result.homeTeamImageUrl}`}
                      width="75px"
                      height="70px"
                    ></img>
                    <h4 className="match__result">{result.homeTeamName}</h4>
                  </div>
                  <div className="match__teamTwo">
                    <img
                      src={`${result.awayTeamImageUrl}`}
                      width="75px"
                      height="70px"
                    ></img>
                    <h4 className="match__result">{result.awayTeamName}</h4>
                  </div>
                </div>{" "}
                <hr className="match__divider" />
              </>
            );
          })}{" "}
        </>
      )}
    </div>
  );
};

export default ResultsDetail;