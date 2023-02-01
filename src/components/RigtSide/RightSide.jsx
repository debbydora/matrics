import React from "react";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div>
        <h3 className="company__title">Company details</h3>
        <Updates />
      </div>
      <div></div>
    </div>
  );
};

export default RightSide;
