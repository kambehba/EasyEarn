import React, { useState } from "react";
import "../Landing/Landing.css";
import { propStyle } from "aws-amplify-react";

function Landing(props) {
  const [playerName, setplayerName] = useState("");
  return (
    <div className="s1">
      <input
        className="landing-s2"
        placeholder="Enter Your Name"
        value={playerName}
        onChange={(event) => {
          setplayerName(event.target.value);
        }}
      ></input>

      <button
        className="btn btn-success landing-s3"
        onClick={() => props.joinExistingGameClicked(playerName)}
      >
        Join a Game
      </button>

      <button
        className="btn btn-danger landing-s3"
        onClick={() => props.hostNewGameClicked(playerName)}
      >
        Host a Game
      </button>
    </div>
  );
}

export default Landing;
