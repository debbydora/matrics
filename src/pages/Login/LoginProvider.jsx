import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginProvider = (props) => {
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  useEffect(() => {}, []);
  const url = "https://demoapi.remis.africa/Login";

  const navigate = useNavigate();
  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitUser = (e) => {
    e.preventDefault();
    if (user.userName === "" || user.password === "") {
      return toast.error("please enter your credentials");
    }
    axios
      .post(url, {
        email: user.userName,
        password: user.password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("companyId", res.data.country.id);
          localStorage.setItem("userId", res.data.userId);
          localStorage.setItem("active", res.data.isActive);
          getCompanyDetails();
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const getCompanyDetails = () => {
    // prettier-ignore
    const headers = {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Accept": "application/json; charset=UTF-8",
      };
    axios
      .get("https://demoapi.remis.africa/Company/Details", {
        headers,
      })
      .then((res) => {
        console.log(res.data.data.company.id);
        localStorage.setItem("companyId", res.data?.data?.company.id);
      })
      .catch((err) => console.log(err));
  };

  return props.render({
    user,
    onHandleChange,
    onSubmitUser,
  });
};

export default LoginProvider;
