import "./Results.scss";
import "./Card.scss";

const Results = () => {
  return (
    <div className="card__container column__half column__half--gap">
      <h2>Results</h2>
      <div className="card">
        <b>View more results</b>
        <br/>
        <span>Date: </span> <b>Friday 20 January 2022</b> <br/>
        <span>time: </span> <b>14:00 PM</b> <br/>
        <span>Competition: </span> <b>League Match</b> <br/>
        AC Belfast vs Southside II
      </div>
    </div>
  );
};

export default Results;
