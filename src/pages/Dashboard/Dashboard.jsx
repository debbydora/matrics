import React from "react";
import "./Dashboard.css";
import MainDash from "../../components/MainDash/MainDash";
import Sidebar from "../../components/Sidebar";
import DashboardProvider from "./DashboardProvider";

const Dashoard = () => {
  return (
    <DashboardProvider
      render={() => {
        return (
          <div className="App">
            <div className="AppGlass">
              <Sidebar />
              <MainDash />
            </div>
          </div>
        );
      }}
    />
  );
};

export default Dashoard;
