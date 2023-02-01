import axios from "axios";
import { useEffect } from "react";

const DashboardProvider = (props) => {
  useEffect(() => {
    getOverview();
  }, []);
  const getOverview = () => {
    // prettier-ignore
    const headers = {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Accept": "application/json; charset=UTF-8",
      };
    axios
      .get("https://demoapi.remis.africa/Dashboard/CompanyOverview", {
        headers,
      })

      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return props.render({});
};

export default DashboardProvider;
