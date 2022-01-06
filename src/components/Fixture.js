import "./Fixture.scss";
import "./Card.scss";
import acbelfastlogo from "../images/acbelfastlogo.png";
import southsidelogo from "../images/southsidelogo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FixturesDetail from "./fixtures/FixturesDetail";


const Fixture = () => {
  //let isFixturesPage = false;

  return (
    <div className="card__container column__half">
      <h2>Fixtures</h2>
      <div className="card card-home">
        <div className="results__title">
        <Link to="/fixtures"><b className="results__title--link">View more fixtures</b></Link><b className="viewMore__carot">{'>'}</b>
        </div>
      <FixturesDetail />
      </div>
    </div>
  );
};

export default Fixture;
