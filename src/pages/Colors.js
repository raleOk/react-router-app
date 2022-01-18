import React, { useEffect, useState } from "react";

import ColorsTable from "../components/Colors/ColorsTable";

const Colors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("colorsData"));
    setData(colors);
  }, []);

  const tableDataHandler = arr => {
    setData(arr);
  };

  return <ColorsTable rows={data} tableDataHandler={tableDataHandler} />;
};

export default Colors;
