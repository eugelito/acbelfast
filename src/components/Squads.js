import "./Squads.scss";
import over35s from "../images/over35s.jpeg";
import playerPlaceholder from "../images/player.png";

const Squads = () => {
  return (
      <div className="container__squads">
      <h1 className="page__heading">Squads</h1>
      <div className="container__squads--first">
        <div className="container container--column">
          <h2 className="squads__heading--first">First Team</h2>
          {/* <img className="squads__image" height="300px"></img> */}
          <br/>
          <div className="squads__position">
          <h3>Manager</h3>
          <br/>
          <img src={playerPlaceholder} height="75px"></img> 

            <p>Gareth Tilley</p>

            </div>
            <div className="squads__position">
            <h3>Goalkeepers</h3>
            <img src={playerPlaceholder} height="75px"></img> 

            <p className="marginBottom-2">John Doe</p>
          </div>
          <div className="squads__position">
            <h3>Defenders</h3>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
          </div>
          <div className="squads__position">
            <h3>Midfielders</h3>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
          </div>

          <div className="squads__position">
            <h3>Fowards</h3>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
          </div>
        </div>
        </div>

        <div className="container__squads--overs">
        <div className="container container--column">
          <h2 className="squads__heading--overs">Over 35s Team</h2>
          <img src={over35s} className="squads__image" height="300px"></img>
          <br/>
          <div className="squads__position">
          <h3>Manager</h3>
            <p>Colin 'Colly' Walker</p>
            </div>
          <div className="squads__position">
            <h3>Goalkeepers</h3>
            <p className="marginBottom-2">TBA</p>
            <h3>Defenders</h3>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
          </div>
          <div className="squads__position">
            <h3>Midfielders</h3>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
          </div>

          <div className="squads__position">
            <h3>Fowards</h3>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
            <img src={playerPlaceholder} height="75px"></img> 

            <p>TBA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squads;
