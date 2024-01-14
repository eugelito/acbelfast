import React from "react";
// import FixtureData from "../../fixtureData.json";
import "./Fixtures.scss";
import { useState, useEffect } from "react";
import { db } from "../../firebase-config";
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
  where,
  query,
  Timestamp,
  admin,
  firebase,
} from "firebase/firestore";

import { auth } from "../../firebase-config";
import AddFixture from "./AddFixture";
import moment from "moment";
import placeHolderImage from "../../images/placeholderlogo.jpeg";
import acbelfastlogo from "../../images/acbelfastlogo.png";
import acbelfastlogo35 from "../../images/acbelfastlogo35.png";
import ClubLogoSwitch from "../ClubLogoSwitch";

const FixturesDetail = ({ showAllFixtures, isHomePageFixture }) => {
  const [fixtures, setFixtures] = useState([]);
  const fixturesCollectionRef = collection(db, "fixtures");

  const deletePastFixtures = async () => {
    const TimeDateNow = new Date();
    TimeDateNow.setMinutes(TimeDateNow.getMinutes());

    const pastFixturesQuery = query(
      fixturesCollectionRef,
      where("dateTime", "<", TimeDateNow)
    );

    const pastFixtureSnapshot = await getDocs(pastFixturesQuery);

    pastFixtureSnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  };

  const getFixtures = async () => {
    const data = await getDocs(
      fixturesCollectionRef,
      orderBy("dateTime", "asc")
    );
    setFixtures(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    deletePastFixtures();
    getFixtures();
  }, []);

  useEffect(() => {}, []);

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
      {fixtures.length > 0 && <br />}
      {!showAllFixtures ? (
        <>
          {fixtures
            .sort((a, b) => a.dateTime - b.dateTime)
            .slice(0, 2)
            .map((fixture, index) => {
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
                      <b>{fixture.competition} match</b> at{" "}
                      <b>{fixture.venue}</b>
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
                      src={ClubLogoSwitch(fixture.homeTeamName)}
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
                      {fixture.homeTeamName} <br />v<br />{" "}
                      {fixture.awayTeamName}
                    </h4>
                    <img
                      // src={
                      //   fixture.awayTeamName.includes("ACB 35")
                      //     ? acbelfastlogo35
                      //     : placeHolderImage ||
                      //       fixture.awayTeamName.includes("AC Belfast")
                      src={ClubLogoSwitch(fixture.awayTeamName)}
                      width="75px"
                      height="70px"
                    ></img>
                  </div>
                  {fixtures.length > 1 && <hr className="match__divider" />}
                </>
              );
            })}
          {fixtures.length == 0 && <span>No upcoming fixtures</span>}
        </>
      ) : (
        <>
          {fixtures
            .sort((a, b) => a.dateTime - b.dateTime)
            .map((fixture, index) => {
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
                      <b>{fixture.competition} match</b> <br />
                      at <b>{fixture.venue}</b>
                    </p>{" "}
                    <br />
                  </div>
                  <div className="match__teams">
                    <img
                      src={ClubLogoSwitch(fixture.homeTeamName)}
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
                      {fixture.homeTeamName} <br />v<br />{" "}
                      {fixture.awayTeamName}
                    </h4>
                    <img
                      src={ClubLogoSwitch(fixture.awayTeamName)}
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
                  {index !== fixtures.length - 1 && (
                    <hr className="match__divider" />
                  )}{" "}
                </>
              );
            })}
          {fixtures.length == 0 && <span>No upcoming fixtures</span>}
        </>
      )}
    </div>
  );
};

export default FixturesDetail;
