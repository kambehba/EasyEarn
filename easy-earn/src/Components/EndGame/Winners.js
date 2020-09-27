import React, { useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import "./Winners.css";
import Winner from "../EndGame/Winner";

const Winners = (props) =>
  props.winnerList.map((item) => {
    return (
      <Winner Name={item.name} id={item.id} />
      // <div className="winners-s1">
      //   <h1>The Winners are:</h1>
      //   <h1 className="winners-s2" key={item.id}>
      //     {item.name}
      //   </h1>
      // </div>
    );
  });

export default Winners;
