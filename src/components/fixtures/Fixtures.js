import React, { useState } from "react";
import "./Fixtures.scss";
import FixturesDetail from "./FixturesDetail";
import AddFixture from "./AddFixture";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

const Fixtures = () => {
  const [addFixture, setShowAddFixture] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="container__fixtures">
      <h1 className="page__heading">Fixtures</h1>
      <div className="container container__fixtures--column">
        <div className="card__container card__threeQuarterWidth">
          {auth.currentUser && (
            <button
              className={addFixture ? "secondaryBtn" : "primaryBtn"}
              onClick={() => setShowAddFixture(!addFixture)}
            >
              {addFixture ? "Hide add fixture" : "Add a new fixture"}
            </button>
          )}
          {addFixture && (
            <div className="card__container card__threeQuarterWidth">
              <div className="card add__fixture--card">
                <>
                  <AddFixture />
                </>
              </div>
            </div>
          )}
          {!addFixture && (
            <div className="card__container card__threeQuarterWidth">
              <div className="card">
                <FixturesDetail
                  isHomepageFixture={true}
                  showAllFixtures={true}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fixtures;
