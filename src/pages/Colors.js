import React, { useEffect, useState } from "react";
import axios from "axios";

const Colors = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://reqres.in/api/colors")
      .then(res => {
        return res.data.data;
      })
      .then(data => {
        console.log(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return <div>{isLoading ? "Loading" : null}</div>;
};

export default Colors;
