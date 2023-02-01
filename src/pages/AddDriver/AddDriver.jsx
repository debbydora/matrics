import React from "react";
import "./AddDriver.css";
import AddDriverProvider from "./AddDriverProvider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginCard from "../../components/LoginCard/LoginCard";
import Sidebar from "../../components/Sidebar";

const AddDriver = () => {
  return (
    <AddDriverProvider
      render={({ onHandleChange, driver, addDriver }) => {
        return (
          <div className="App">
            <div className="AppGlass">
              <Sidebar />
              <div className="driver__page">
                <LoginCard>
                  <h1 className="driver__title">Add Driver</h1>
                  {/* <form> */}
                  <div className="inputs__container">
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      value={driver.name}
                      onChange={onHandleChange}
                    />
                    <input
                      type="phone"
                      placeholder="Phone"
                      name="phone"
                      value={driver.phone}
                      onChange={onHandleChange}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={driver.email}
                      onChange={onHandleChange}
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      name="address"
                      value={driver.address}
                      onChange={onHandleChange}
                    />
                    <input
                      type="text"
                      placeholder="City"
                      name="city"
                      value={driver.city}
                      onChange={onHandleChange}
                    />
                    <input
                      type="text"
                      placeholder="State"
                      name="state"
                      value={driver.state}
                      onChange={onHandleChange}
                    />
                    <input
                      type="phone"
                      placeholder="Alt phoneNumber"
                      name="altPhoneNumber"
                      value={driver.altPhoneNumber}
                      onChange={onHandleChange}
                    />
                  </div>
                  <button
                    type="button"
                    className="driver_button"
                    onClick={(e) => addDriver(e)}
                  >
                    Add
                  </button>
                  {/* </form> */}
                  <ToastContainer />
                </LoginCard>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default AddDriver;
