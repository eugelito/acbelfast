import { useEffect, useState } from "react";
import "./League.scss";

const League = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [data, setData] = useState();

  // const errorMesssage =
  //   "You already used all of your plan's requests this month.";
  // var isPlanUsed = false;

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/5c9c879e-6085-4094-b40d-306cfb215fd8"
      );
      //fetch from Sheets
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      isPlanUsed = true;
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [oversData, setOversData] = useState();

  const getOversData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/b845bdaf-061c-48e1-bcc9-e607e494cfe9"
      );
      //fetch from Sheets
      const oversData = await res.json();
      setOversData(oversData);
      console.log(oversData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOversData();
  }, []);

  return (
    <div>
      {/** Display First Team if First Team is selected */}
      <h2 className="leagueHeading">
        {toggleState === 1
          ? "TBA First Team League"
          : "Emerge Invitational League"}
      </h2>
      <p style={{ color: "#fff", marginBottom: "3rem" }}>2022 - 2023 Season</p>

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
          {/*  <tr><td>{isPlanUsed ? 'plan used' : 'not plan used'}</td></tr> */}
          {/* Firsts league table, we want to display on click of first team buttom  */}
          {data?.map((item, i) => (
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
      </div>
      <div
        className={
          toggleState === 2
            ? "table__section active-content"
            : "table__section content"
        }
      >
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
          {oversData?.map((item, i) => (
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
      </div>
    </div>
  );
};

export default League;
