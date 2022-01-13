import React, { useEffect, useState } from "react";
import ColorsTable from "../components/Colors/ColorsTable";
import ColorsForm from "../components/Colors/ColorsForm";

const Colors = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const colors = JSON.parse(localStorage.getItem("colorsData"));
    setData(colors);
  }, []);

  const addColorHandler = obj => {
    setData(prevState => {
      return [...prevState, obj];
    });
  };

  const tableDataHandler = arr => {
    setData(arr);
  };

  return (
    <>
      <ColorsTable rows={data} tableDataHandler={tableDataHandler} />
      <ColorsForm addColorHandler={addColorHandler} />
    </>
  );
};

export default Colors;
