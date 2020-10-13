import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./Winner.css";

function Winner(props) {
  return (
    <div className="winner-s1">
      {/* <img
        src="https://media.giphy.com/media/cilTr2LPQ4q1ugTKSp/giphy.gif"
        alt="Flowers in Chania"
      ></img> */}
      <h1 className="glow" key={props.id}>
        {props.Name}
      </h1>
    </div>
  );
}

export default Winner;
