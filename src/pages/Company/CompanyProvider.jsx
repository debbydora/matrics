import axios from "axios";
import { useEffect, useState } from "react";

const CompanyProvider = (props) => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getCompanyDetails();
  }, []);
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
        // console.log(res.data.data.company);
        setDetails(res.data?.data?.company);
        localStorage.setItem("companyId", res.data?.data?.company.id);
      })
      .catch((err) => console.log(err));
  };

  return props.render({
    details,
  });
};

export default CompanyProvider;
