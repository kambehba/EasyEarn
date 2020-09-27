import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./Winner.css";

function Winner(props) {
  return (
    <div className="winner-s1">
      <h1 className="winner-s2" key={props.id}>
        {props.Name}
      </h1>
    </div>
  );
}

export default Winner;
