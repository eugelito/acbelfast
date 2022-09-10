import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
import "./Login.scss";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.currentUser) {
      navigate("../fixtureedit");
    }
  }, []);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const loginAccount = async (event) => {
    try {
      event.preventDefault();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      navigate("../fixtures");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <div className="login_container">
        <h1 className="loginHeading">Login</h1>
        <br />
        <label>{errorMessage}</label>
        <br />
        <form onSubmit={loginAccount}>
          <input
            type="text"
            placeholder="email"
            onChange={(event) => {
              setLoginEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <br />
          {!auth.currentUser && (
            <button className="loginBtn" type="submit">
              Log in
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
