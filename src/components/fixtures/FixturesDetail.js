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
  orderBy,
} from "firebase/firestore";

import { auth } from "../../firebase-config";
import AddFixture from "./AddFixture";
import moment from "moment";
import placeHolderImage from "../../images/placeholderlogo.jpeg";
import acbelfastlogo from "../../images/acbelfastlogo.png";
import acbelfastlogo35 from "../../images/acbelfastlogo35.png";

// moment.format("MMM Do YY"))

const FixturesDetail = ({ showAllFixtures, isHomePageFixture }) => {
  const [fixtures, setFixtures] = useState([]);
  const fixturesCollectionRef = collection(db, "fixtures");

  useEffect(() => {
    const getFixtures = async () => {
      const data = await getDocs(
        fixturesCollectionRef,
        orderBy("dateTime", "asc")
      );
      setFixtures(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

      // let fireStoreTimestamp = data.doc.data().dateTime;
      // let javascriptDate = fireStoreTimestamp.toDate();
      // console.log(javascriptDate);
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

  // const handleFixtureDateTime = (seconds, nanoseconds) => {
  //   let time = {
  //     seconds,
  //     nanoseconds,
  //   };

  //   const fireBaseTime = new Date(
  //     time.seconds * 1000 + time.nanoseconds / 1000000
  //   );

  //   const atDate = fireBaseTime.toDateString();
  //   const atTime = fireBaseTime.toLocaleTimeString();

  //   setDate(atDate);
  //   setTime(atTime);
  // };

  return (
    <div>
      <br />
      {!showAllFixtures ? (
        <>
          {fixtures
            .sort((a, b) => a.dateTime - b.dateTime)
            .slice(0, 2)
            .map((fixture) => {
              return (
                <>
                  <div className="match__details" key={fixture.id}>
                    <b className="match__date">
                      <b>
                        {moment(
                          new Date(
                            fixture.dateTime.seconds * 1000 +
                              fixture.dateTime.nanoseconds / 1000000
                          )
                        )
                          .utc(+1)
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
                      // src={
                      //   fixture.homeTeamName.includes("ACB 35")
                      //     ? acbelfastlogo35
                      //     : placeHolderImage ||
                      //       fixture.homeTeamName.includes("AC Belfast")
                      src={
                        fixture.homeTeamName.includes("AC")
                          ? acbelfastlogo
                          : placeHolderImage
                      }
                      width="75px"
                      height="70px"
                    ></img>
                    <h4
                      className={
                        isHomePageFixture
                          ? "match__teams--name"
                          : "match__result"
                      }
                    >
                      {fixture.homeTeamName} v {fixture.awayTeamName}
                    </h4>
                    <img
                      // src={
                      //   fixture.awayTeamName.includes("ACB 35")
                      //     ? acbelfastlogo35
                      //     : placeHolderImage ||
                      //       fixture.awayTeamName.includes("AC Belfast")
                      src={
                        fixture.awayTeamName.includes("AC")
                          ? acbelfastlogo
                          : placeHolderImage
                      }
                      width="75px"
                      height="70px"
                    ></img>
                  </div>

                  {fixtures.length > 1 && <hr className="match__divider" />}
                </>
              );
            })}{" "}
        </>
      ) : (
        <>
          {fixtures
            .sort((a, b) => a.dateTime - b.dateTime)
            .map((fixture) => {
              return (
                <>
                  {/* {auth.currentUser && ( */}
                  <div className="match__details" key={fixture.id}>
                    <b className="match__date">
                      {moment(
                        new Date(
                          fixture.dateTime.seconds * 1000 +
                            fixture.dateTime.nanoseconds / 1000000
                        )
                      )
                        .utc(+1)
                        .format("dddd MMM Do, YYYY hh:mm A")}
                    </b>
                    <p className="match__competition">
                      <b>{fixture.competition}</b> at <b>{fixture.venue}</b>
                    </p>{" "}
                    <br />
                  </div>
                  <div className="match__teams">
                    <img
                      src={
                        fixture.homeTeamName.includes("AC")
                          ? acbelfastlogo
                          : placeHolderImage
                      }
                      width="75px"
                      height="70px"
                    ></img>
                    <h4
                      className={
                        isHomePageFixture
                          ? "match__teams--name"
                          : "match__result"
                      }
                    >
                      {fixture.homeTeamName} v {fixture.awayTeamName}
                    </h4>
                    <img
                      src={
                        fixture.awayTeamName.includes("AC")
                          ? acbelfastlogo
                          : placeHolderImage
                      }
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
                  {fixtures.length > 1 && <hr className="match__divider" />}
                </>
              );
            })}
        </>
      )}
    </div>
  );
};

export default FixturesDetail;
