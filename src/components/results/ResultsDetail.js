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
import acbelfastlogo from "../../images/acbelfastlogo.png";
// firsts league logos
import albionStarII from "../../images/firstsLeagueLogos/albionstarii.jpeg";
import glanvillerec from "../../images/firstsLeagueLogos/glanvillerec.jpeg";
import newsantosii from "../../images/firstsLeagueLogos/newsantosii.jpeg";
import ormeaubakery from "../../images/firstsLeagueLogos/ormeaubakery.jpeg";
import realtanacromoigeii from "../../images/firstsLeagueLogos/realtanacromoigeii.jpeg";
import strancats from "../../images/firstsLeagueLogos/strancats.jpeg";
import suffolkswiftsii from "../../images/firstsLeagueLogos/suffolkswiftsii.jpeg";
// overs league logos
import ballymacashrangers from "../../images/oversLeagueLogos/ballymacashrangers.jpeg";
import crumlinunited from "../../images/oversLeagueLogos/crumlinunited.jpeg";
import fcunitedlisburn from "../../images/oversLeagueLogos/fcunitedlisburn.jpeg";
import malluskfc from "../../images/oversLeagueLogos/malluskfc.jpeg";
import oxfordsunnyside from "../../images/oversLeagueLogos/oxfordsunnyside.jpeg";
import sopfc from "../../images/oversLeagueLogos/sopfc.jpeg";
import stteresa from "../../images/oversLeagueLogos/stteresa.jpeg";

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

  const clubLogoSwitch = (teamName) => {
    let clubLogo;

    switch (teamName) {
      case "AC Belfast":
      case "ACB 35s":
      case "AC Belfast Overs":
        clubLogo = acbelfastlogo;
        break;
      case "Albion Star II":
        clubLogo = albionStarII;
        break;
      case "Glanville Rec":
        clubLogo = glanvillerec;
        break;
      case "New Santos II":
        clubLogo = newsantosii;
        break;
      case "Ormeau Bakery":
        clubLogo = ormeaubakery;
        break;
      case "Realta naCromoige II":
        clubLogo = realtanacromoigeii;
        break;
      case "Stran Cats":
        clubLogo = strancats;
        break;
      case "Suffolk Swifts II":
        clubLogo = suffolkswiftsii;
        break;
      // overs
      case "Ballymacash Rangers":
        clubLogo = ballymacashrangers;
        break;
      case "Crumlin United":
        clubLogo = crumlinunited;
        break;
      case "FC United Lisburn":
      case "FC United":
        clubLogo = fcunitedlisburn;
        break;
      case "Mallusk FC":
        clubLogo = malluskfc;
        break;
      case "Oxyford Sunnyside":
        clubLogo = oxfordsunnyside;
        break;
      case "St. Oliver Plunkett FC":
        clubLogo = sopfc;
        break;
      case "St. Teresa FC":
        clubLogo = stteresa;
        break;
      case "Other":
      default:
        clubLogo = placeHolderImage;
    }

    return clubLogo;
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
                          .format("dddd MMM Do, YYYY")}
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
                        src={clubLogoSwitch(result.homeTeamName)}
                        width="75px"
                        height="70px"
                      ></img>
                      <h4 className="match__result">{result.homeTeamName}</h4>
                    </div>
                    <div className="match__teamTwo">
                      <img
                        // src={`${result.awayTeamImageUrl}`}
                        src={clubLogoSwitch(result.awayTeamName)}
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
                        Goalscorers:{" "}
                        <span className="goalscorer__names">
                          {result.goalscorer}
                        </span>
                      </div>
                    </>
                  )}
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
                          .format("dddd MMM Do, YYYY")}
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
                        src={clubLogoSwitch(result.homeTeamName)}
                        width="75px"
                        height="70px"
                      ></img>
                      <h4 className="match__result">{result.homeTeamName}</h4>
                    </div>
                    <div className="match__teamTwo">
                      <img
                        // src={`${result.awayTeamImageUrl}`}
                        src={clubLogoSwitch(result.awayTeamName)}
                        width="75px"
                        height="70px"
                      ></img>
                      <h4 className="match__result">{result.awayTeamName}</h4>
                    </div>
                  </div>
                  {result.goalscorer && (
                    <>
                      <br />
                      <div className="goalscorer">
                        Goalscorers:{" "}
                        <span className="goalscorer__names">
                          {result.goalscorer}
                        </span>
                      </div>
                    </>
                  )}
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
