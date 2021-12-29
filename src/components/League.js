import { useEffect, useState } from "react";
import "./League.scss";

const League = () => {
  const [data, setData] = useState();

  // const getData = async () => {
  //   try {
  //    const res = await fetch("https://sheet.best/api/sheets/5c9c879e-6085-4094-b40d-306cfb215fd8");
  //     //fetch from Sheets   
  //     const data = await res.json();
  //     setData(data);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  // const getOversData = async () => {
  //   try {
  //     const res = await fetch(
  //   //"https://sheet.best/api/sheets/b845bdaf-061c-48e1-bcc9-e607e494cfe9"
  //     );
  //     //fetch from Sheets   
  //     const Oversdata = await res.json();
  //     setData(Oversdata);
  //     console.log(Oversdata);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getOversData();
  // }, []);

  const onClick = () => {
    console.log("onClick");
  };
  return (
    <div>
      {/** Display First Team if First Team is selected */}
      <h2 className="leagueHeading">Belfast District League 3</h2>
      <p style={{ color: "#fff", marginBottom: "3rem" }}>2021 - 2022 Season</p>

      <div className="league__select">
        <button class="btn btn__league active">First Team</button>
        <button
          className="btn btn__league btn__league--overs"
          onClick={onClick}
        >
          {" "}
          Over 35s
        </button>
      </div>

        <div class="table__section">
          <table class="table">
            <tr>
              <th>Position</th>
              <th>Club</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>Points</th>
            </tr>
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
               

      {/** Display Over 35s league table if over 35s team is selected */}
    </div>
    </div>
  );
};

export default League;
