import React from "react";
import Table from "../Table/Table";
import { motion } from "framer-motion";
import "./MainDash.css";
const MainDash = (props) => {
  let dashboard = props.dashboard;
  console.log({ dashboard: dashboard });
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>

      <motion.div className="CompactCard default-bg" layoutId="expandableCard">
        <div className="radialBar">
          <span>Dashboard Analystics</span>
        </div>
        <div className="detail">
          <span>{dashboard ? dashboard.balance : 0}</span>
          <span>Balance</span>
        </div>
      </motion.div>
      {/* <Table /> */}
    </div>
  );
};

export default MainDash;
