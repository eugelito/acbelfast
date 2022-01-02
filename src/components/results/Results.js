import "./Results.scss";
import "../Card.scss";
import ResultsDetail from "../../components/results/ResultsDetail";

const Results = () => {
  return (
    <div className="results__container">
      <h1 className="page__heading">Results</h1>
      <div className="container">
        <div className="card__container card__threeQuarterWidth">
          <div className="card">
            <ResultsDetail showAllResults={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
