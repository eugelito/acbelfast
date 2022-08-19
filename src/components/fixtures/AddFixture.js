import React from "react";
import { auth } from "../../firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./Fixtures.scss";

const AddFixture = () => {
  const fixturesCollectionRef = collection(db, "fixtures");

  const [newHomeTeamName, setNewHomeTeamName] = useState("");
  const [newHomeTeamImage, setNewHomeTeamImage] = useState("");
  const [newAwayTeamName, setNewAwayTeamName] = useState("");
  const [newAwayTeamImage, setNewAwayTeamImage] = useState("");
  const [newDateTime, setNewDateTime] = useState(new Date());
  const [newCompetition, setNewCompetition] = useState("League");
  const [newVenue, setNewVenue] = useState("");

  const handleAddFixture = async (event) => {
    await addDoc(fixturesCollectionRef, {
      homeTeamName: newHomeTeamName,
      homeTeamImage: newHomeTeamImage,
      awayTeamName: newAwayTeamName,
      awayTeamImage: newAwayTeamImage,
      dateTime: newDateTime,
      competition: newCompetition,
      venue: newVenue,
    });

    alert("New fixture has been added!");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  };

  const handleCompetitionSelect = (event) => {
    setNewCompetition(event.target.value);
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
              <input
                type="text"
                placeholder="Enter Home Team Name"
                required
                onChange={(event) => {
                  setNewHomeTeamName(event.target.value);
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
              <input
                type="text"
                placeholder="Enter Away Team Name"
                required
                onChange={(event) => {
                  setNewAwayTeamName(event.target.value);
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
              setNewDateTime(new Date(event.target.value));
            }}
          ></input>
          <label>Select competition</label>
          <select onChange={handleCompetitionSelect} value={newCompetition}>
            <option value="League">League</option>
            <option value="Cup">Cup</option>
            <option value="Friendly">Friendly</option>
          </select>
          <label>Venue</label>
          <input
            type="text"
            placeholder="Enter venue"
            required
            onChange={(event) => {
              setNewVenue(event.target.value);
            }}
          ></input>
          <button
            className="BlueBtn"
            type="submit"
            value="Submit fixture"
            onClick={handleAddFixture}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddFixture;
