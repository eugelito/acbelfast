import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import appStoreLogo from "../images/appStoreLogo.svg";
import googlePlayLogo from "../images/googleplayLogo.svg";

import "./League.scss";

const League = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [data, setData] = useState(null);

  // const errorMesssage =
  //   "You already used all of your plan's requests this month.";
  // var isPlanUsed = false;

  // const getData = async () => {
  //   try {
  //     const res = await fetch(
  //       "https://api.apispreadsheets.com/data/DYeuGGxsdVTd6a37/"
  //     );
  //     //fetch from Sheets
  //     const data = await res.json();
  //     setData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     //isPlanUsed = true;
  //   }
  // };

  // const getData = async () => {
  //   await fetch("https://api.apispreadsheets.com/data/DYeuGGxsdVTd6a37/").then(
  //     (res) => {
  //       if (res.status === 200) {
  //         // SUCCESS
  //         res
  //           .json()
  //           .then((data) => {
  //             const leagueData = data;
  //             setData(leagueData);
  //           })
  //           .catch((err) => {
  //             console.log(err);
  //             setData(data);
  //           });
  //       } else {
  //         // ERROR
  //       }
  //     }
  //   );
  // };

  // useEffect(() => {
  //   getData();
  //   console.log(data);
  // }, []);

  // const [oversData, setOversData] = useState(null);

  // const getOversData = async () => {
  //   fetch("https://api.apispreadsheets.com/data/03xwGOlYlTBJOlUX/").then(
  //     (res) => {
  //       if (res.status === 200) {
  //         // SUCCESS
  //         res
  //           .json()
  //           .then((data) => {
  //             const leagueData = data;
  //             setOversData(leagueData);
  //           })
  //           .catch((error) => {
  //             console.log(error);
  //             setOversData(oversData);
  //           });
  //       } else {
  //         // ERROR
  //       }
  //     }
  //   );
  // };

  const [viewLeagueSpreadSheet, setViewLeagueSpreadSheet] = useState(false);

  // useEffect(() => {
  //   getOversData();
  // }, []);

  // useEffect(() => {
  //   if (data && oversData == null) {
  //     setViewLeagueSpreadSheet(true);
  //   }

  //   console.log(viewLeagueSpreadSheet);
  // }, [data]);

  return (
    <div className="league__section">
      {/** Display First Team if First Team is selected */}
      <h2 className="leagueHeading">
        {toggleState === 1
          ? "Belfast and District League (Division 2)"
          : "Emerge Invitational League (Championship)"}
      </h2>
      <p style={{ color: "#fff", marginBottom: "3rem" }}>2023 - 2024 Season</p>
      <div className="league__select">
        <button
          id="firstTeamLeagueBtn"
          className={
            toggleState === 1
              ? "active btn btn__league"
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
              ? "active btn btn__league btn__league--overs"
              : "btn btn__league btn__league--overs"
          }
          onClick={() => toggleTab(2)}
        >
          {" "}
          Over 35s
        </button>
      </div>
      <div
        className={
          toggleState === 1
            ? "table__section active-content"
            : "table__section content"
        }
      >
        {!viewLeagueSpreadSheet && toggleState === 1 ? (
          <>
            {/* <a
              className="externalLeagueLink"
              href="https://docs.google.com/spreadsheets/d/18aFn_Z0BcnLVHmR1G-41k2XYNBfpuq2_cPHX_AhHhgA/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              View BDFL Div 3 league table{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a> */}
            <p className="appStoreHint">
              Download the Football NI app on the{" "}
              <a href="https://apps.apple.com/gb/app/football-ni/id1636686499">
                App Store
              </a>{" "}
              or{" "}
              <a href="https://play.google.com/store/apps/details?id=de.analyticom.cometlive.ifa&hl=en&gl=US">
                Google Play
              </a>{" "}
              to stay up to date with the first team fixtures, results, team
              line-ups, match events and other statistics.
            </p>
            <div className="row">
              <a href="https://apps.apple.com/gb/app/football-ni/id1636686499">
                <img
                  className="appStoreLogo"
                  src={appStoreLogo}
                  alt="Download app store logo"
                />
              </a>{" "}
              <a href="https://play.google.com/store/apps/details?id=de.analyticom.cometlive.ifa&hl=en&gl=US">
                <img
                  className="appStoreLogo"
                  src={googlePlayLogo}
                  alt="Download google play logo"
                />
              </a>
            </div>
          </>
        ) : (
          <table className="table">
            <tr>
              <th>Pos</th>
              <th>Club</th>
              <th>Played</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>Pts</th>
            </tr>
            {/* <tr><td>{isPlanUsed ? 'plan used' : 'plan not used'}</td></tr>  */}
            {/* Firsts league table, we want to display on click of first team buttom  */}
            {data?.data.map((item, i) => (
              <tr key={i}>
                <td>{item.Position}</td>
                <td>{item.Club}</td>
                <td>{item.Played}</td>
                <td>{item.Won}</td>
                <td>{item.Drawn}</td>
                <td>{item.Lost}</td>
                <td>{item.Points}</td>
              </tr>
            ))}
          </table>
        )}
      </div>
      <div
        className={
          toggleState === 2
            ? "table__section active-content"
            : "table__section content"
        }
      >
        {!viewLeagueSpreadSheet && toggleState === 2 ? (
          <a
            className="externalLeagueLink"
            href="https://www.facebook.com/groups/1234137986977584/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Emerge Invitational League Facebook Group{" "}
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </a>
        ) : (
          <table className="table">
            <tr>
              <th>Pos</th>
              <th>Club</th>
              <th>Played</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>Pts</th>
            </tr>
            {/* Overs league table, we want to display on click of first team buttom*/}
            {/* {oversData?.data.map((item, i) => (
              <tr key={i}>
                <td>{item.Position}</td>
                <td>{item.Club}</td>
                <td>{item.Played}</td>
                <td>{item.Won}</td>
                <td>{item.Drawn}</td>
                <td>{item.Lost}</td>
                <td>{item.Points}</td>
              </tr>
            ))} */}
          </table>
        )}
      </div>
    </div>
  );
};

export default League;
