import "./Result.scss";
import "./Card.scss";
import ResultsDetail from "../components/results/ResultsDetail";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Results = () => {
  return (
    <div className="card__container column__half">
      <h2>Results</h2>
      <div className="card card-home">
        <div className="results__title">
          <Link to="/results">
            <b className="results__title--link">View more results</b>
          </Link>
          <b className="viewMore__carot">
            <i className="fas fa-caret-right"></i>
          </b>
        </div>
        <ResultsDetail showAllResults={false} />
      </div>
    </div>
  );
};

export default Results;
