import React, { useEffect, useState } from "react";
import axios from "axios";
import ColorsTable from "../components/ColorsTable";

const Colors = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://reqres.in/api/colors")
      .then(res => {
        return res.data.data;
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div>{isLoading ? "Loading" : <ColorsTable rows={data} />}</div>;
};

export default Colors;
