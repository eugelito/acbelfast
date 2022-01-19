import "./Squads.scss";
import over35s from "../images/over35s.jpeg";
import playerPlaceholder from "../images/player.png";
import firstSquadData from "../squadFirstList.json";
import oversSquadData from "../squadOversList.json";


const Squads = () => {
  return (
    <div className="container__squads">
      <h1 className="page__heading">Squads</h1>
      <div className="container__squads--first">
        <div className="container container--column">
          <h2 className="squads__heading--first">First Team</h2>
          {/* <img className="squads__image" height="300px"></img> */}
          <br />
          <h3>Manager</h3>
          <div className="squads__position squads__position--manager">
            <div className="player__profile">
              <img src={playerPlaceholder} height="75px"></img>

              <p>Gareth Tilley</p>
            </div>
          </div>
          <h3>Goalkeepers</h3>
          <div className="squads__position">
            {firstSquadData
              .filter((position) => position.position.includes("Goalkeeper"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px"></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>
          <h3>Defenders</h3>
          <div className="squads__position">
            {firstSquadData
              .filter((position) => position.position.includes("Defender"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px" alt=""></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>
          <h3>Midfielders</h3>
          <div className="squads__position">
            {firstSquadData
              .filter((position) => position.position.includes("Midfielder"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px" alt=""></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>

          <h3>Fowards</h3>
          <div className="squads__position">
            {firstSquadData
              .filter((position) => position.position.includes("Forward"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px" alt=""></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div className="container__squads--overs">
        <div className="container container--column">
          <h2 className="squads__heading--overs">Over 35s Team</h2>
          <img src={over35s} className="squads__image" height="300px" alt=""></img>
          <br />
          <h3>Manager</h3>
          <div className="squads__position squads__position--manager">
            <div className="player__profile">
              <img src={playerPlaceholder} height="75px" alt=""></img>

              <p>Colin 'Colly' Walker</p>
            </div>
          </div>
          <h3>Goalkeepers</h3>
          <div className="squads__position">
            {oversSquadData
              .filter((position) => position.position.includes("Goalkeeper"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px" alt=""></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>
          <h3>Defenders</h3>
          <div className="squads__position">
            {oversSquadData
              .filter((position) => position.position.includes("Defender"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px" alt=""></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>
          <h3>Midfielders</h3>
          <div className="squads__position">
            {oversSquadData
              .filter((position) => position.position.includes("Midfielder"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px" alt=""></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>

          <h3>Fowards</h3>
          <div className="squads__position">
            {oversSquadData
              .filter((position) => position.position.includes("Forward"))
              .map((player) => {
                return (
                  <div className="player__profile">
                    <img src={playerPlaceholder} height="75px" alt=""></img>
                    <p className="marginBottom-2">{player.fullName}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squads;
