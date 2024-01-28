import React from "react";
import { auth } from "../../firebase-config";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db, storage } from "../../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import "./Fixtures.scss";
import clubData from "../../clubsData.json";

const AddFixture = () => {
  const fixturesCollectionRef = collection(db, "fixtures");

  const [newHomeTeamName, setNewHomeTeamName] = useState("");
  const [newHomeTeamImage, setNewHomeTeamImage] = useState("");
  const [newAwayTeamName, setNewAwayTeamName] = useState("");
  const [newAwayTeamImage, setNewAwayTeamImage] = useState("");
  const [newDateTime, setNewDateTime] = useState(new Date());
  const [newCompetition, setNewCompetition] = useState(
    "Belfast & District League Divison 2"
  );
  const [selectedVenue, setSelectedVenue] = useState("Mallusk Playing Fields");
  const [newVenue, setNewVenue] = useState("Mallusk Playing Fields");
  const [selectedOptionHome, setSelectedOptionHome] = useState("");
  const [selectedOptionAway, setSelectedOptionAway] = useState("");

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

  const handleVenueSelect = (event) => {
    const selectedOption = event.target.value;
    setSelectedVenue(selectedOption);
  };
  // const homeImageUpload = () => {
  //   if (newHomeTeamImage == null) return;
  //   const imageRef = ref(storage, `images/${newHomeTeamImage.name + v4()}`);
  //   uploadBytes(imageRef, newHomeTeamImage).then(() => {
  //     alert("image uploaded");
  //   });
  // };

  const handleSelectChangeHome = (event) => {
    const selectedOptionHome = event.target.value;
    setSelectedOptionHome(selectedOptionHome);
    setNewHomeTeamName(selectedOptionHome);

    if (selectedOptionHome === "Other") {
      // If "Other" is selected, set the input value to an empty string
      setNewHomeTeamName("");
    }
  };

  const handleSelectChangeAway = (event) => {
    const selectedOptionAway = event.target.value;
    setSelectedOptionAway(selectedOptionAway);
    setNewAwayTeamName(selectedOptionAway);

    if (selectedOptionAway === "Other") {
      // If "Other" is selected, set the input value to an empty string
      setNewAwayTeamName("");
    }
  };

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
              {selectedOptionHome === "Other" && (
                <input
                  type="text"
                  placeholder="Enter Home Team Name"
                  required
                  onChange={(event) => {
                    setNewHomeTeamName(event.target.value);
                  }}
                ></input>
              )}
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
              {selectedOptionAway === "Other" && (
                <input
                  type="text"
                  placeholder="Enter Away Team Name"
                  required
                  onChange={(event) => {
                    setNewAwayTeamName(event.target.value);
                  }}
                ></input>
              )}
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
            <option value="Belfast & District League Divison 2">
              Belfast & District League Divison 2
            </option>
            <option value="Emerge Invitational League Championship">
              Emerge Invitational League Championship
            </option>
            <option value="Cup">Cup</option>
            <option value="Friendly">Friendly</option>
          </select>
          <label>Venue</label>
          <select onChange={handleVenueSelect} value={selectedVenue}>
            <option value="Mallusk Playing Fields">
              Mallusk Playing Fields
            </option>
            <option value="Strangford Avenue Playing Fields">
              Strangford Avenue Playing Fields
            </option>
            <option value="Other">Other</option>
          </select>
          {/* Show an additional input field if "Other" is selected */}
          {selectedVenue === "Other" && (
            <input
              type="text"
              placeholder="Enter venue"
              required
              value={newVenue}
              onChange={(event) => setNewVenue(event.target.value)}
            ></input>
          )}

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
