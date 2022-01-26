import axios from "axios";

const token = JSON.parse(localStorage.getItem("token"));

const authAxios = axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const axiosColors = (
  page,
  totalRowsHandler,
  rowsPerPageHandler,
  stateUpdate
) => {
  authAxios
    .get(`/colors?page=${page}`)
    .then(res => {
      return res.data;
    })
    .then(data => {
      const colors = data.data;
      const totalRows = data.total;
      const rowsPerPage = data.per_page;
      const currData = JSON.parse(localStorage.getItem("colorsData"));
      if (page === 1) {
        localStorage.setItem("colorsData", JSON.stringify(colors));
      }
      if (page !== 1) {
        const newData = [...currData, ...colors];
        localStorage.setItem("colorsData", JSON.stringify(newData));
      }
      totalRowsHandler(totalRows);
      rowsPerPageHandler(rowsPerPage);
      stateUpdate(JSON.parse(localStorage.getItem("colorsData")));
    })
    .catch(err => {
      console.log(err);
    });
};

export default axiosColors;
