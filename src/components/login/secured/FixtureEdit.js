import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";

const FixtureEdit = () => {
  const [fixtures, setFixtures] = useState([]);
  const fixturesCollectionRef = collection(db, "fixtures");

  useEffect(() => {
    const getFixtures = async () => {
      const data = await getDocs(fixturesCollectionRef);
      setFixtures(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getFixtures();
  }, []);

  return (
    <div>
      <h1>FixtureEdit</h1>;
      {fixtures.map((fixture) => {
        return (
          <div style={{ color: "white", marginBottom: "2rem" }}>
            <div className="match__details" key={fixture.id}>
              <b className="match__date">
                {fixture.date} {fixture.time}
              </b>
              <p className="match__competition">
                <b>{fixture.competition}</b> at <b>{fixture.venue}</b>
              </p>{" "}
              <br />
            </div>
            <div className="match__teams">
              <img
                src={`${fixture.homeTeamImageUrl}`}
                width="75px"
                height="70px"
              ></img>
              <h4
              // className={
              //   // isHomePageFixture ? "match__teams--name" : "match__result"
              // }
              >
                {fixture.homeTeamName} v {fixture.awayTeamName}
              </h4>
              <img
                src={`${fixture.awayTeamImageUrl}`}
                width="75px"
                height="70px"
              ></img>
            </div>
            <button>Edit</button>
            <button>Delete</button>
            <hr />
          </div>
        );
      })}
      <button>Add</button>
    </div>
  );
};

export default FixtureEdit;
