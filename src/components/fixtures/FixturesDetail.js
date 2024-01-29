import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import FixtureItem from "./FixtureItem";
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";

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
      {!showAllFixtures ? (
        <>
          {fixtures
            .sort((a, b) => a.dateTime - b.dateTime)
            .slice(0, 2)
            .map((fixture, index, array) => (
              <FixtureItem
                key={fixture.id}
                fixture={fixture}
                isHomePageFixture={isHomePageFixture}
                isLastItem={index === array.length - 1}
              />
            ))}
        </>
      ) : (
        <>
          {fixtures
            .sort((a, b) => a.dateTime - b.dateTime)
            .map((fixture, index, array) => (
              <FixtureItem
                key={fixture.id}
                fixture={fixture}
                isHomePageFixture={isHomePageFixture}
                onDelete={auth.currentUser ? (id) => deleteFixture(id) : null}
                isLastItem={index === array.length - 1}
              />
            ))}
        </>
      )}
      {fixtures.length === 0 && <span>No upcoming fixtures</span>}
    </div>
  );
};

export default FixturesDetail;
