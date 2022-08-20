import React, { useState } from "react";

import "./Results.scss";
import "../Card.scss";
import ResultsDetail from "../../components/results/ResultsDetail";
import AddResult from "./AddResult";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase-config";

const Results = () => {
  const [addResult, setShowAddResult] = useState(false);
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div className="results__container">
      <h1 className="page__heading">Results</h1>
      <div className="container">
        <div className="card__container card__threeQuarterWidth">
          {auth.currentUser && (
            <button
              className={addResult ? "secondaryBtn" : "primaryBtn"}
              onClick={() => setShowAddResult(!addResult)}
            >
              {addResult ? "Hide add result" : "Add a new result"}
            </button>
          )}

          {addResult && (
            <div className="card__container card__threeQuarterWidth">
              <div className="card add__fixture--card">
                {" "}
                <>
                  <AddResult />{" "}
                </>
              </div>
            </div>
          )}
          {!addResult && (
            <div className="card__container card__threeQuarterWidth">
              <div className="card">
                <ResultsDetail showAllResults={true} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Results;
