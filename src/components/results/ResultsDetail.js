import React from "react";
//import ResultsData from "../../resultData.json";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { auth } from "../../firebase-config";
import moment from "moment";
import placeHolderImage from "../../images/placeholderlogo.jpeg";

import "./Results.scss";

const ResultsDetail = ({ showAllResults }) => {
  const [results, setResults] = useState([]);
  const resultsCollectionRef = collection(db, "results");

  useEffect(() => {
    const getResults = async () => {
      const data = await getDocs(resultsCollectionRef);
      setResults(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getResults();
  }, []);

  const deleteResult = async (id) => {
    const resultsDoc = doc(db, "results", id);
    await deleteDoc(resultsDoc);
    window.location.reload();
  };

  return (
    <div>
      {!showAllResults ? (
        <>
          {results
            .sort((a, b) => b.dateTime - a.dateTime)
            .slice(0, 2)
            .map((result) => {
              return (
                <>
                  <div className="match__details" key={result.id}>
                    <p className="match__competition">
                      <span className="match__date">
                        {" "}
                        {moment(
                          new Date(
                            result.dateTime.seconds * 1000 +
                              result.dateTime.nanoseconds / 1000000
                          )
                        )
                          .utc(+1)
                          .format("dddd MMM Do, YYYY hh:mm A")}
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
                        // src={`${result.homeTeamImageUrl}`}
                        src={placeHolderImage}
                        width="75px"
                        height="70px"
                      ></img>
                      <h4 className="match__result">{result.homeTeamName}</h4>
                    </div>
                    <div className="match__teamTwo">
                      <img
                        // src={`${result.awayTeamImageUrl}`}
                        src={placeHolderImage}
                        width="75px"
                        height="70px"
                      ></img>
                      <h4 className="match__result">{result.awayTeamName}</h4>
                    </div>
                  </div>{" "}
                  {results.length > 1 && <hr className="match__divider" />}
                </>
              );
            })}
        </>
      ) : (
        <>
          {" "}
          {results
            .sort((a, b) => b.dateTime - a.dateTime)
            .map((result) => {
              return (
                <>
                  <div className="match__details">
                    <p className="match__competition">
                      <span className="match__date">
                        {moment(
                          new Date(
                            result.dateTime.seconds * 1000 +
                              result.dateTime.nanoseconds / 1000000
                          )
                        )
                          .utc(+1)
                          .format("dddd MMM Do, YYYY hh:mm A")}
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
                        //src={`${result.homeTeamImageUrl}`}
                        src={placeHolderImage}
                        width="75px"
                        height="70px"
                      ></img>
                      <h4 className="match__result">{result.homeTeamName}</h4>
                    </div>
                    <div className="match__teamTwo">
                      <img
                        // src={`${result.awayTeamImageUrl}`}
                        src={placeHolderImage}
                        width="75px"
                        height="70px"
                      ></img>
                      <h4 className="match__result">{result.awayTeamName}</h4>
                    </div>
                  </div>
                  {auth.currentUser && (
                    <button
                      className="deleteBtn"
                      onClick={() => deleteResult(result.id)}
                    >
                      Delete
                    </button>
                  )}
                  {results.length > 1 && <hr className="match__divider" />}
                </>
              );
            })}{" "}
        </>
      )}
    </div>
  );
};

export default ResultsDetail;
