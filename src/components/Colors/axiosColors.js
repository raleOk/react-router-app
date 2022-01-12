import axios from "axios";

const axiosColors = () => {
  axios
    .get("https://reqres.in/api/colors")
    .then(res => {
      return res.data.data;
    })
    .then(data => {
      localStorage.setItem("colorsData", JSON.stringify(data));
    })
    .catch(err => {
      console.log(err);
    });
};

export default axiosColors;
