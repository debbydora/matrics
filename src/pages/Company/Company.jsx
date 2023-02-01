import React from "react";
import CompanyProvider from "./CompanyProvider";
import img1 from "../../imgs/img1.png";
import "./Company.css";
import Sidebar from "../../components/Sidebar";
import Spinner from "../../components/Spinner/Spinner";
const Company = () => {
  return (
    <CompanyProvider
      render={({ details }) => {
        return (
          <div className="App">
            <div className="AppGlass">
              <Sidebar />
              <div className="RightSide">
                {details.length === 0 ? (
                  <Spinner />
                ) : (
                  <div>
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
                            <span>{details.name}</span>
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
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Company;
