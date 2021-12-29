import "./Squads.scss";

const Squads = () => {
  return (
      <div className="container__squads">
      <div className="container__squads--first">
        <div className="container container--column">
        <h1 className="squads__heading">Squads</h1>
          <h2 className="squads__heading--first">First Team</h2>
          <div className="squads__position">
          <h3>Manager</h3>
            <p>John Doe</p>
            </div>
            <div className="squads__position">
            <h3>Goalkeepers</h3>
            <p className="marginBottom-2">John Doe</p>
          </div>
          <div className="squads__position">
            <h3>Defenders</h3>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
          </div>
          <div className="squads__position">
            <h3>Midfielders</h3>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
          </div>

          <div className="squads__position">
            <h3>Fowards</h3>
            <p>John Doe</p>
            <p>John Doe</p>
          </div>
        </div>
        </div>

        <div className="container__squads--overs">
        <div className="container container--column">
          <h2 className="squads__heading--overs">Over 35s Team</h2>
          <div className="squads__position">
          <h3>Manager</h3>
            <p>John Doe</p>
            </div>
          <div className="squads__position">
            <h3>Goalkeepers</h3>
            <p className="marginBottom-2">John Doe</p>
            <h3>Defenders</h3>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
          </div>
          <div className="squads__position">
            <h3>Midfielders</h3>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
            <p>John Doe</p>
          </div>

          <div className="squads__position">
            <h3>Fowards</h3>
            <p>John Doe</p>
            <p>John Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squads;
