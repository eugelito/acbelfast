import { useState } from "react";

import "./Squads.scss";
import over35s from "../images/overs.jpeg";
import firsts from "../images/firsts.jpeg";
import playerPlaceholder from "../images/player.png";
import firstSquadData from "../squadFirstList.json";
import oversSquadData from "../squadOversList.json";

const Squads = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container__squads">
      <h1 className="page__heading">Squads</h1>
      <div className="league--tabs">
        <div className="league--tabs__center">
          <button
            id="firstTeamLeagueBtn"
            className={
              toggleState === 1
                ? "active btn btn__league btn__navy"
                : "btn btn__league btn__league--overs"
            }
            onClick={() => toggleTab(1)}
          >
            First Team
          </button>
          <button
            id="oversTeamLeagueBtn"
            className={
              toggleState === 2
                ? "active btn btn__league btn__league--overs btn__navy"
                : "btn btn__league btn__league--overs"
            }
            onClick={() => toggleTab(2)}
          >
            {" "}
            Over 35s
          </button>
        </div>
      </div>
      <div
        className={
          toggleState === 2
            ? "table__section active-content table__section content"
            : "container__squads--first"
        }
      >
        <div className="container container--column">
          <h2 className="squads__heading--first">First Team</h2>
          <img src={firsts} className="squads__image" alt=""></img> <br />
          <h3>Player / Manager</h3>
          <div className="squads__position squads__position--manager">
            <div className="player__profile">
              <img src={"/images/players/firsts/diarmuid.jpeg"} />
              <p>Diarmuid Waide</p>
            </div>
          </div>
          <h3>Goalkeepers</h3>
          <div className="squads__position">
            {firstSquadData.Goalkeeper.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} height="150px" alt="" />
                  <p className="marginBottom-2">{player.fullName}</p>
                </div>
              );
            })}
          </div>
          <h3>Defenders</h3>
          <div className="squads__position">
            {firstSquadData.Defender.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} alt="" />
                  <p className="marginBottom-2">{player.fullName}</p>
                </div>
              );
            })}
          </div>
          <h3>Midfielders</h3>
          <div className="squads__position">
            {firstSquadData.Midfielder.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} alt="" />
                  <p className="marginBottom-2">{player.fullName}</p>
                </div>
              );
            })}
          </div>
          <h3>Forwards</h3>
          <div className="squads__position">
            {firstSquadData.Forward.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} alt="" />
                  <p className="marginBottom-2">{player.fullName}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={
          toggleState === 1
            ? "table__section active-content table__section content"
            : "container__squads--overs"
        }
      >
        <div className="container container--column">
          <h2 className="squads__heading--overs">Over 35s Team</h2>
          <img
            src={over35s}
            className="squads__image squads__image--overs"
            alt=""
          ></img>
          <br />
          <h3>Player / Manager</h3>
          <div className="squads__position squads__position--manager">
            <div className="player__profile">
              <img src={playerPlaceholder} alt=""></img>
              <p>Graham Parkinson</p>
            </div>
          </div>
          <h3>Goalkeepers</h3>
          <div className="squads__position">
            {oversSquadData.Goalkeeper.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} alt="" />
                  <p className="marginBottom-2">{player.fullName}</p>
                </div>
              );
            })}
          </div>
          <h3>Defenders</h3>
          <div className="squads__position">
            {oversSquadData.Defender.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} alt="" />
                  <p className="marginBottom-2">{player.fullName}</p>
                </div>
              );
            })}
          </div>
          <h3>Midfielders</h3>
          <div className="squads__position">
            {oversSquadData.Midfielder.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} alt="" />
                  <p className="marginBottom-2">{player.fullName}</p>
                </div>
              );
            })}
          </div>

          <h3>Forwards</h3>
          <div className="squads__position">
            {oversSquadData.Forward.map((player) => {
              return (
                <div className="player__profile">
                  <img src={player.imageUrl} alt="" />
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
