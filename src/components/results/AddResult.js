// //
// "competition": "Friendly Match",
// "date": "Saturday 30th April 2022",
// "homeTeamName": "Blackstafff 2nds",
// "homeTeamScore": "4",
// "awayTeamName": "AC Belfast (Firsts)",
// "awayTeamScore": "7"

import React from "react";
import { auth } from "../../firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import clubData from "../../clubsData.json";

const AddResult = () => {
  const resultsCollectionRef = collection(db, "results");

  const [competition, setCompetition] = useState("League");
  const [dateTime, setDateTime] = useState(new Date());
  const [homeTeamName, setHomeTeamName] = useState();
  const [homeTeamScore, setHomeTeamScore] = useState("");
  const [awayTeamName, setAwayTeamName] = useState("");
  const [awayTeamScore, setAwayTeamScore] = useState("");
  const [goalscorer, setGoalscorer] = useState("");
  const [selectedOptionHome, setSelectedOptionHome] = useState("");
  const [selectedOptionAway, setSelectedOptionAway] = useState("");

  const handleAddResult = async (event) => {
    await addDoc(resultsCollectionRef, {
      competition: competition,
      dateTime: dateTime,
      homeTeamName: homeTeamName,
      homeTeamScore: homeTeamScore,
      awayTeamName: awayTeamName,
      awayTeamScore: awayTeamScore,
      goalscorer: goalscorer,
    });

    alert("New result has been added!");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  const handleCompetitionSelect = (event) => {
    setCompetition(event.target.value);
  };

  const handleSelectChangeHome = (event) => {
    const selectedOptionHome = event.target.value;
    setSelectedOptionHome(selectedOptionHome);
    setHomeTeamName(selectedOptionHome);

    if (selectedOptionHome === "Other") {
      // If "Other" is selected, set the input value to an empty string
      setHomeTeamName("");
    }
  };

  const handleSelectChangeAway = (event) => {
    const selectedOptionAway = event.target.value;
    setSelectedOptionAway(selectedOptionAway);
    setAwayTeamName(selectedOptionAway);

    if (selectedOptionAway === "Other") {
      // If "Other" is selected, set the input value to an empty string
      setAwayTeamName("");
    }
  };

  // const homeImageUpload = () => {
  //   if (newHomeTeamImage == null) return;
  //   const imageRef = ref(storage, `images/${newHomeTeamImage.name + v4()}`);
  //   uploadBytes(imageRef, newHomeTeamImage).then(() => {
  //     alert("image uploaded");
  //   });
  // };
  return (
    <div>
      {auth.currentUser && (
        <div>
          <div className="inline--flex">
            <div className="column--half">
              {" "}
              <label>Home team name</label>
              <select
                required
                onChange={handleSelectChangeHome}
                value={selectedOptionHome}
              >
                <option value="" disabled selected>
                  Select Home Team
                </option>
                {clubData.map((club, index) => (
                  <option key={index} value={club.clubName}>
                    {club.clubName}
                  </option>
                ))}
              </select>
              {/** render input if other selected from dropdown */}
              {selectedOptionHome === "Other" && (
                <input
                  type="text"
                  placeholder="Enter Home Team Name"
                  required
                  onChange={(event) => {
                    setHomeTeamName(event.target.value);
                  }}
                ></input>
              )}
              <label>Home Score</label>
              <input
                type="text"
                min={0}
                max={20}
                placeholder="Enter home score"
                onChange={(event) => {
                  setHomeTeamScore(event.target.value);
                }}
              ></input>
              {/* <label>Upload Home Team Image</label>
            <input
              type="file"
              placeholder="Upload Home Team Image"
              required
              onChange={(event) => {
                setNewHomeTeamImage(event.target.files[0]);
              }}
            ></input> */}
            </div>
            <span className="versus">v</span>
            <div className="column--half">
              <label>Away team name</label>
              <select
                required
                onChange={handleSelectChangeAway}
                value={selectedOptionAway}
              >
                <option value="" disabled selected>
                  Select Away Team
                </option>
                {clubData.map((club, index) => (
                  <option key={index} value={club.clubName}>
                    {club.clubName}
                  </option>
                ))}
              </select>
              {/** render input if other selected from dropdown */}
              {selectedOptionAway === "Other" && (
                <input
                  type="text"
                  placeholder="Enter Away Team Name"
                  required
                  onChange={(event) => {
                    setAwayTeamName(event.target.value);
                  }}
                ></input>
              )}
              <label>Away Score</label>
              <input
                type="text"
                min={0}
                max={20}
                placeholder="Enter away score"
                onChange={(event) => {
                  setAwayTeamScore(event.target.value);
                }}
              ></input>
              {/* <label>Enter Away Team Image</label>
            <input
              type="file"
              placeholder="Upload Away Team Image"
              required
              onChange={(event) => {
                setNewAwayTeamImage(event.target.value);
              }}
            ></input> */}
            </div>
          </div>
          <hr />
          <label>Enter date and time</label>
          <input
            className="picker"
            type="datetime-local"
            required
            onChange={(event) => {
              setDateTime(new Date(event.target.value));
            }}
          ></input>
          <label>Select competition</label>
          <select onChange={handleCompetitionSelect} value={competition}>
            <option value="League">League</option>
            <option value="Cup">Cup</option>
            <option value="Friendly">Friendly</option>
          </select>
          <label>Enter goalscorers</label>
          <input
            type="text"
            placeholder="Enter goalscorers"
            required
            onChange={(event) => {
              setGoalscorer(event.target.value);
            }}
          ></input>
          <button
            className="BlueBtn"
            type="submit"
            value="Submit result"
            onClick={handleAddResult}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddResult;
