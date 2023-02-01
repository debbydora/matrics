import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddDriverProvider = (props) => {
  useEffect(() => {}, []);
  const navigate = useNavigate();
  const succesfulAddition = () => {
    return navigate("/staff");
  };
  const [driver, setDriver] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    altPhoneNumber: "",
    roles: [],
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setDriver({ ...driver, [name]: value });
  };

  const addDriver = (e) => {
    e.preventDefault();
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      Accept: "application/json; charset=UTF-8",
    };
    const userId = localStorage.getItem("userId");
    const companyId = localStorage.getItem("companyId");
    const url = `https://demoapi.remis.africa/Driver/Add/${companyId}`;

    const data = {
      companyId,
      userId,
      ...driver,
    };
    if (
      driver.name === "" ||
      driver.phone === "" ||
      driver.email === "" ||
      driver.address === "" ||
      driver.city === "" ||
      driver.state === "" ||
      driver.altPhoneNumber === ""
    ) {
      return toast.error("please enter your information");
    }

    axios
      .post(url, data, { headers })
      .then((res) => {
        console.log(res);
        succesfulAddition();
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const deleteDriver = () => {
    // prettier-ignore
    const headers = {
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
      "Accept": "application/json; charset=UTF-8",
      };
    const driverId = uuid();
    const companyId = uuid();
    axios
      .delete(`https://demoapi.remis.africa/Driver/${companyId}${driverId}`, {
        headers,
      })
      .then(() => {})
      .catch((err) => console.err);
  };
  return props.render({
    onHandleChange,
    driver,
    deleteDriver,
    addDriver,
  });
};

export default AddDriverProvider;
