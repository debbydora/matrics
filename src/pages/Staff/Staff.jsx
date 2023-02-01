import React from "react";
import StaffProvider from "./StaffProvider";
import Sidebar from "../../components/Sidebar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import "./Table.css";
import Spinner from "../../components/Spinner/Spinner";

const Staff = () => {
  const navigate = useNavigate();

  const Add = () => {
    return navigate("/addDriver");
  };
  return (
    <StaffProvider
      render={({ drivers, deleteDriver }) => {
        return (
          <div className="App">
            <div className="AppGlass">
              <Sidebar />
              {/* <Table data={drivers} /> */}
              <div className="Table">
                <br />
                <br />
                <h3>All Drivers</h3>
                {drivers.length === 0 ? (
                  <Spinner />
                ) : (
                  <TableContainer
                    component={Paper}
                    style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
                  >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="left">Email</TableCell>
                          <TableCell align="left">Phone</TableCell>
                          <TableCell align="left">Code</TableCell>
                          <TableCell align="left">Company Name</TableCell>
                          <TableCell align="left">State</TableCell>
                          <TableCell align="left">Date Added</TableCell>
                          <TableCell align="left">Status</TableCell>
                          <TableCell align="left">
                            {" "}
                            <button className="add__btn" onClick={Add}>
                              Add Driver
                            </button>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody style={{ color: "white" }}>
                        {drivers.map((driver, index) => (
                          <TableRow
                            key={index}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell>{driver.name}</TableCell>
                            <TableCell align="left">{driver.email}</TableCell>
                            <TableCell align="left">{driver.phone}</TableCell>
                            <TableCell align="left">{driver.code}</TableCell>
                            <TableCell align="left">
                              {driver.companyName}
                            </TableCell>
                            <TableCell align="left">
                              {driver.dateAdded}
                            </TableCell>
                            <TableCell align="left">{driver.status}</TableCell>
                            <TableCell align="left">
                              {" "}
                              {driver.status}{" "}
                            </TableCell>
                            <TableCell align="left" className="Details">
                              <button
                                className="btn btn-danger"
                                onClick={(e) => deleteDriver(e, driver)}
                              >
                                Delete
                              </button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                )}
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default Staff;
