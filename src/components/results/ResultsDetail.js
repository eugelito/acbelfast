import React, { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import ResultItem from "./ResultItem";
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";

const ResultsDetail = ({ showAllResults }) => {
  const [results, setResults] = useState([]);
  const [editingResult, setEditingResult] = useState(null);
  const [formData, setFormData] = useState({
    homeTeamName: "",
    awayTeamName: "",
    homeTeamScore: "",
    awayTeamScore: "",
    dateTime: "",
    competition: "",
    goalscorer: "",
  });

  const resultsCollectionRef = collection(db, "results");

  useEffect(() => {
    const getResults = async () => {
      const data = await getDocs(resultsCollectionRef);
      setResults(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getResults();
  }, []);

  const deleteResult = async (id) => {
    const resultsDoc = doc(db, "results", id);
    await deleteDoc(resultsDoc);
    window.location.reload();
  };

  const editResult = async (id) => {
    const resultsDoc = doc(db, "results", id);

    // Convert dateTime string to a Date object
    const updatedFormData = {
      ...formData,
      dateTime: new Date(formData.dateTime),
    };

    await updateDoc(resultsDoc, updatedFormData);
    setEditingResult(null);
    const data = await getDocs(resultsCollectionRef);
    setResults(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleEditClick = (result) => {
    setEditingResult(result.id);
    setFormData({
      homeTeamName: result.homeTeamName,
      awayTeamName: result.awayTeamName,
      homeTeamScore: result.homeTeamScore,
      awayTeamScore: result.awayTeamScore,
      dateTime: new Date(result.dateTime.seconds * 1000)
        .toISOString()
        .slice(0, 16),
      competition: result.competition,
      goalscorer: result.goalscorer || "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      {editingResult ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editResult(editingResult);
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
            type="number"
            name="homeTeamScore"
            value={formData.homeTeamScore}
            onChange={handleInputChange}
            placeholder="Home Team Score"
          />
          <input
            type="number"
            name="awayTeamScore"
            value={formData.awayTeamScore}
            onChange={handleInputChange}
            placeholder="Away Team Score"
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
            name="goalscorer"
            value={formData.goalscorer}
            onChange={handleInputChange}
            placeholder="Goalscorer"
          />
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button type="submit" className="primaryBtn">
              Update Result
            </button>
            <button
              type="button"
              className="cancelBtn"
              onClick={() => setEditingResult(null)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          {!showAllResults ? (
            <>
              {results
                .sort((a, b) => b.dateTime - a.dateTime)
                .slice(0, 2)
                .map((result, index, array) => (
                  <ResultItem
                    key={result.id}
                    result={result}
                    isLastItem={index === array.length - 1}
                    onDelete={
                      auth.currentUser ? (id) => deleteResult(id) : null
                    }
                    onEdit={
                      auth.currentUser ? () => handleEditClick(result) : null
                    }
                  />
                ))}
            </>
          ) : (
            <>
              {results
                .sort((a, b) => b.dateTime - a.dateTime)
                .map((result, index, array) => (
                  <ResultItem
                    key={result.id}
                    result={result}
                    onDelete={
                      auth.currentUser ? (id) => deleteResult(id) : null
                    }
                    onEdit={
                      auth.currentUser ? () => handleEditClick(result) : null
                    }
                    isLastItem={index === array.length - 1}
                  />
                ))}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ResultsDetail;
