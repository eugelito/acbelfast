import React from "react";
// import FixtureData from "../../fixtureData.json";
import "./Fixtures.scss";
// import from firestore fixtures
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { auth } from "../../firebase-config";
import AddFixture from "./AddFixture";
import moment from "moment";
import placeHolderImage from "../../images/placeholderlogo.jpeg";

// moment.format("MMM Do YY"))

const FixturesDetail = ({ showAllFixtures, isHomePageFixture }) => {
  const [fixtures, setFixtures] = useState([]);
  const fixturesCollectionRef = collection(db, "fixtures");

  useEffect(() => {
    const getFixtures = async () => {
      const data = await getDocs(fixturesCollectionRef);
      setFixtures(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFixtures();
  }, []);

  // const editFixture = async (
  //   id,
  //   homeTeamName,
  //   homeTeamImage,
  //   awayTeamName,
  //   awayTeamImage,
  //   date,
  //   compeition,
  //   venue
  // ) => {
  //   const fixturesDoc = doc(db, "fixtures", id);
  //   const updateFixture = {};
  //   await updateDoc(fixturesDoc, updateFixture);
  // };

  const deleteFixture = async (id) => {
    const fixturesDoc = doc(db, "fixtures", id);
    await deleteDoc(fixturesDoc);
    window.location.reload();
  };

  return (
    <div>
      <br />
      {!showAllFixtures ? (
        <>
          {fixtures.slice(0, 2).map((fixture) => {
            return (
              <>
                <div className="match__details" key={fixture.id}>
                  <b className="match__date">
                    <b>
                      {moment
                        .utc(fixture.dateTime)
                        .format("dddd MMM Do, YYYY hh:mm A")}
                    </b>
                  </b>
                  <p className="match__competition">
                    <b>{fixture.competition}</b> at <b>{fixture.venue}</b>
                  </p>{" "}
                  <br />
                </div>
                <div className="match__teams">
                  <img
                    // src={`${fixture.homeTeamImageUrl}`}
                    src={placeHolderImage}
                    width="75px"
                    height="70px"
                  ></img>
                  <h4
                    className={
                      isHomePageFixture ? "match__teams--name" : "match__result"
                    }
                  >
                    {fixture.homeTeamName} v {fixture.awayTeamName}
                  </h4>
                  <img
                    //src={`${fixture.awayTeamImageUrl}`}
                    src={placeHolderImage}
                    width="75px"
                    height="70px"
                  ></img>
                </div>

                <hr />
              </>
            );
          })}{" "}
        </>
      ) : (
        <>
          {fixtures.map((fixture) => {
            return (
              <>
                {/* {auth.currentUser && ( */}
                <div className="match__details" key={fixture.id}>
                  <b className="match__date">
                    {moment
                      .utc(fixture.dateTime)
                      .format("dddd MMM Do, YYYY hh:mm A")}
                  </b>
                  <p className="match__competition">
                    <b>{fixture.competition}</b> at <b>{fixture.venue}</b>
                  </p>{" "}
                  <br />
                </div>
                <div className="match__teams">
                  <img
                    //src={`${fixture.homeTeamImageUrl}`}
                    src={placeHolderImage}
                    width="75px"
                    height="70px"
                  ></img>
                  <h4
                    className={
                      isHomePageFixture ? "match__teams--name" : "match__result"
                    }
                  >
                    {fixture.homeTeamName} v {fixture.awayTeamName}
                  </h4>
                  <img
                    //src={`${fixture.awayTeamImageUrl}`}
                    src={placeHolderImage}
                    width="75px"
                    height="70px"
                  ></img>
                </div>
                {/* <button
                  type="button"
                  className="editBtn"
                  // onClick={editFixture(
                  //   fixture.id,
                  //   fixture.homeTeamName,
                  //   fixture.homeTeamImageUrl,
                  //   fixture.awayTeamName,
                  //   fixture.awayTeamImageUrl,
                  //   fixture.date,
                  //   fixture.competition,
                  //   fixture.venue
                  // )}
                >
                  Edit
                </button> */}
                {auth.currentUser && (
                  <button
                    className="deleteBtn"
                    onClick={() => deleteFixture(fixture.id)}
                  >
                    Delete
                  </button>
                )}
                <hr />
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FixturesDetail;
