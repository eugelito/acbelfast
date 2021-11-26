import "./League.scss";

const League = () => {

  const onClick = () => {
    console.log("onClick")
  }   
  return (
    <div>
      {/** Display First Team if First Team is selected */}
      <h2 className="leagueHeading">Belfast District League 3</h2>
      <p style={{ color: "#fff", marginBottom: "3rem" }}>2021 - 2022 Season</p>

      <div className="league__select">
      <button class="btn btn__league active">First Team</button>
      <button className="btn btn__league btn__league--overs" onClick={onClick}> Over 35s</button>
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
          <tr>
            <td>1</td>
            <td>AC Belfast</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Southside II</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
          <tr>
            <td>11</td>
            <td>Team</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
        </table>
      </div>

      {/** Display Over 35s league table if over 35s team is selected */}
    </div>
  );
};

export default League;
