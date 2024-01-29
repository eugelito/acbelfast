import "./Card.scss";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FixturesDetail from "./fixtures/FixturesDetail";

// import from firestore fixtures
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Fixture = () => {
  //let isFixturesPage = false;
  const [fixtures, setFixtures] = useState([]);
  const fixtureCollectionRef = collection(db, "fixtures");

  useEffect(() => {
    const getFixtures = async () => {};

    getFixtures();
  }, []);

  return (
    <div className="card__container column__half column__half--gap">
      <h2>Fixtures</h2>

      <div className="card card-home">
        <div className="results__title">
          <Link to="/fixtures">
            <b className="results__title--link">View more fixtures</b>
          </Link>
          <b className="viewMore__carot">
            <i className="fas fa-caret-right"></i>
          </b>
        </div>
        <FixturesDetail showAllFixtures={false} />
      </div>
    </div>
  );
};

export default Fixture;
