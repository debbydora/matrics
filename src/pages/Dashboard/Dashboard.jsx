import React from "react";
import "./Dashboard.css";
import MainDash from "../../components/MainDash/MainDash";
import Sidebar from "../../components/Sidebar";
import DashboardProvider from "./DashboardProvider";

const Dashoard = () => {
  return (
    <DashboardProvider
      render={({ dashboard }) => {
        console.log({ mm: dashboard });
        return (
          <div className="App">
            <div className="AppGlass">
              <Sidebar />
              <MainDash dashboard={dashboard} />
            </div>
            {/* <div>
              <h3 className="company__title">Company details</h3>
              <div className="Updates">
                <div className="update">
                  <img src={img1} alt="profile" />
                </div>
                <div className="noti">
                  <div
                    style={{ marginBottom: "0.5rem" }}
                    className="details__box"
                  >
                    <div>
                      <span>Name</span>
                      <span></span>
                    </div>
                    <div>
                      <span>Email</span>
                      <span>{details.email}</span>
                    </div>
                    <div>
                      <span>Phone Number</span>
                      <span>{details.phoneNumber}</span>
                    </div>
                    <div>
                      <span>Country</span>
                      <span>{details.country}</span>
                    </div>
                    <div>
                      <span>Base Currency</span>
                      <span>{details.baseCurrency}</span>
                    </div>
                    <div>
                      <span>City</span>
                      <span>{details.city}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        );
      }}
    />
  );
};

export default Dashoard;
