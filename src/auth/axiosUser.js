import axios from "axios";

const axiosUser = () => {
  const userData = { email: "eve.holt@reqres.in", password: "pistol" };
  axios
    .post("https://reqres.in/api/register", userData)
    .then(res => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
    })
    .catch(err => {
      console.log(err);
    });
};

export default axiosUser;
