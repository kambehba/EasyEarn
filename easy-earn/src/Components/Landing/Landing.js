import React, { useState } from "react";
import "../Landing/Landing.css";
import { propStyle } from "aws-amplify-react";
import validatePlayerName from "../Common/Validate";
import useForm from "../Common/useForm";

function Landing(props) {
  const [playerName, setplayerName] = useState("");

  const { handleChange, handleSubmit, values, errors } = useForm(
    joinGame,
    hostGame,
    validatePlayerName
  );

  function joinGame(name) {
    props.joinExistingGameClicked(name);
  }

  function hostGame(name) {
    props.hostNewGameClicked(name);
  }

  return (
    // <div className="landing-s1">
    <form className="landing-s1" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="playerName"
        className="landing-s2"
        placeholder="Enter Your Name"
        value={values.playerName}
        onChange={handleChange}
      />
      {errors.playerName && <p className="landing-s4">{errors.playerName}</p>}

      <button
        type="submit"
        name="joinGame"
        className="btn btn-success landing-s3"
        //onClick={() => props.joinExistingGameClicked(playerName)}
        onClick={handleSubmit}
      >
        Join a Game
      </button>

      <button
        type="submit"
        name="hostGame"
        className="btn btn-danger landing-s3"
        //onChange={handleChange}
        //onClick={() => props.hostNewGameClicked(playerName)}
        onClick={handleSubmit}
      >
        Host a Game
      </button>
    </form>
    // </div>
  );
}

export default Landing;
