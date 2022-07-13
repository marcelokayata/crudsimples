import axios from "axios";
const baseURL2 = "http://localhost:4000";
function getAllData(setDataTask) {
    
    axios.get(`${baseURL2}/tasks`).then((response) => {
        setDataTask(response.data);
        console.log("dados: ", response.data)
      });
  }
function postFilterData(nomeData) {

    axios.post(`${baseURL2}/tasksfind`, {
        nome: nomeData
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
function createData(formData) {

    axios.post(`${baseURL2}/tasks`, {
        nome: formData.name,
        cargo: formData.role
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
export { getAllData, postFilterData, createData };