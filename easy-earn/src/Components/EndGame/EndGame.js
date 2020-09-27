import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./EndGame.css";

import Winners from "../EndGame/Winners";

function EndGame(props) {
  return (
    <div>
      END Game
      <div>
        <Winners winnerList={props.winnerList} />
      </div>
    </div>
  );
}

export default EndGame;
