import axios from "axios";
import { useEffect, useState } from "react";

const DashboardProvider = (props) => {
  const [dashboard, setDashboard] = useState(null);
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
      .get("https://demoapi.remis.africa/dashboard", {
        headers,
      })

      .then((res) => {
        setDashboard(res?.data?.data?.dashboard);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return props.render({
    dashboard,
  });
};

export default DashboardProvider;
