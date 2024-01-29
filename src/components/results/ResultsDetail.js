import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import ResultItem from "./ResultItem";
import { db } from "../../firebase-config";
import { auth } from "../../firebase-config";

const ResultsDetail = ({ showAllResults }) => {
  const [results, setResults] = useState([]);
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

  return (
    <div>
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
                onDelete={auth.currentUser ? (id) => deleteResult(id) : null}
                isLastItem={index === array.length - 1}
              />
            ))}
        </>
      )}
    </div>
  );
};

export default ResultsDetail;
