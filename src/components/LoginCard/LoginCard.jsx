import React from "react";
import "./LoginCard.css";

const LoginCard = (props) => {
  return <div className="Login__card">{props.children}</div>;
};

export default LoginCard;
