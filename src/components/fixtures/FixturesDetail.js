import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  updateDoc,
} from "firebase/firestore";
import FixtureItem from "./FixtureItem";
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";

const FixturesDetail = ({ showAllFixtures, isHomePageFixture }) => {
  const [fixtures, setFixtures] = useState([]);
  const [editingFixture, setEditingFixture] = useState(null);
  const [formData, setFormData] = useState({
    homeTeamName: "",
    awayTeamName: "",
    dateTime: "",
    competition: "",
    venue: "",
  });

  const fixturesCollectionRef = collection(db, "fixtures");

  const deletePastFixtures = async () => {
    const TimeDateNow = new Date();
    TimeDateNow.setMinutes(TimeDateNow.getMinutes());

    const pastFixturesQuery = query(
      fixturesCollectionRef,
      where("dateTime", "<", TimeDateNow)
    );

    const pastFixtureSnapshot = await getDocs(pastFixturesQuery);

    pastFixtureSnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
  };

  const getFixtures = async () => {
    const data = await getDocs(
      fixturesCollectionRef,
      orderBy("dateTime", "asc")
    );
    setFixtures(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const editFixture = async (id) => {
    const fixturesDoc = doc(db, "fixtures", id);

    // Convert dateTime string to a Date object
    const updatedFormData = {
      ...formData,
      dateTime: new Date(formData.dateTime), // Ensure dateTime is a valid Date object
    };

    await updateDoc(fixturesDoc, updatedFormData);
    setEditingFixture(null);
    getFixtures();
  };

  const deleteFixture = async (id) => {
    const fixturesDoc = doc(db, "fixtures", id);
    await deleteDoc(fixturesDoc);
    window.location.reload();
  };

  const handleEditClick = (fixture) => {
    setEditingFixture(fixture.id);
    setFormData({
      homeTeamName: fixture.homeTeamName,
      awayTeamName: fixture.awayTeamName,
      dateTime: new Date(fixture.dateTime.seconds * 1000)
        .toISOString()
        .slice(0, 16), // Convert Firestore Timestamp to ISO string
      competition: fixture.competition,
      venue: fixture.venue,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    deletePastFixtures();
    getFixtures();
  }, []);

  return (
    <div>
      {editingFixture ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editFixture(editingFixture);
          }}
        >
          <input
            type="text"
            name="homeTeamName"
            value={formData.homeTeamName}
            onChange={handleInputChange}
            placeholder="Home Team Name"
          />
          <input
            type="text"
            name="awayTeamName"
            value={formData.awayTeamName}
            onChange={handleInputChange}
            placeholder="Away Team Name"
          />
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleInputChange}
            placeholder="Date and Time"
          />
          <input
            type="text"
            name="competition"
            value={formData.competition}
            onChange={handleInputChange}
            placeholder="Competition"
          />
          <input
            type="text"
            name="venue"
            value={formData.venue}
            onChange={handleInputChange}
            placeholder="Venue"
          />
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button type="submit" className="primaryBtn">
              Update Fixture
            </button>
            <button
              type="button"
              className="cancelBtn"
              onClick={() => setEditingFixture(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          {!showAllFixtures ? (
            <>
              {fixtures
                .sort((a, b) => a.dateTime - b.dateTime)
                .slice(0, 2)
                .map((fixture, index, array) => (
                  <FixtureItem
                    key={fixture.id}
                    fixture={fixture}
                    isHomePageFixture={isHomePageFixture}
                    isLastItem={index === array.length - 1}
                    onDelete={
                      auth.currentUser ? (id) => deleteFixture(id) : null
                    }
                    onEdit={
                      auth.currentUser ? () => handleEditClick(fixture) : null
                    }
                  />
                ))}
            </>
          ) : (
            <>
              {fixtures
                .sort((a, b) => a.dateTime - b.dateTime)
                .map((fixture, index, array) => (
                  <FixtureItem
                    key={fixture.id}
                    fixture={fixture}
                    isHomePageFixture={isHomePageFixture}
                    onDelete={
                      auth.currentUser ? (id) => deleteFixture(id) : null
                    }
                    onEdit={
                      auth.currentUser ? () => handleEditClick(fixture) : null
                    }
                    isLastItem={index === array.length - 1}
                  />
                ))}
            </>
          )}
          {fixtures.length === 0 && <span>No upcoming fixtures</span>}
        </>
      )}
    </div>
  );
};

export default FixturesDetail;
