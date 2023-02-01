import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const StaffProvider = (props) => {
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    GetAllStaff();
  }, []);
  const GetAllStaff = () => {
    // prettier-ignore
    const headers = {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-type": "application/json; charset=UTF-8"
      };
    const companyID = localStorage.getItem("companyId");
    const url = `https://demoapi.remis.africa/drivers/all?count=false&companyId=${companyID}`;

    axios
      .get(url, {
        headers,
      })
      .then((res) => setDrivers(res.data))
      .catch((err) => toast.error(err.message));
  };

  const deleteDriver = (e, driver) => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-type": "application/json; charset=UTF-8",
    };
    const companyID = localStorage.getItem("companyId");
    const driverID = driver.id;
    const url = `https://demoapi.remis.africa/driver/delete/${companyID}/${driverID}`;

    axios
      .delete(url, {
        headers,
      })
      .then((res) => GetAllStaff())
      .catch((err) => toast.error(err.message));
  };

  return props.render({
    drivers,
    deleteDriver,
  });
};

export default StaffProvider;
