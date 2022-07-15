import axios from "axios";
const baseURL2 = "http://localhost:4000";
function getAllData(setDataTask) {
    
    axios.get(`${baseURL2}/tasks`).then((response) => {
        setDataTask(response.data);
        console.log("dados: ", response.data)
      });
  }
function postFilterData(nomeData, setGetResponse) {
  console.log("inside filter: ", nomeData)
    axios.post(`${baseURL2}/tasksfind`, {
        
        nome: nomeData.name,
        cargo: nomeData.cargo
      })
      .then(function (response) {
        console.log("inside filter2: ", response.data)
        setGetResponse(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
function createData(formData, setGetResponse) {

    axios.post(`${baseURL2}/tasks`, {
        nome: formData.name,
        cargo: formData.role
      })
      .then(function (response) {
        setGetResponse([response.data])
        // console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
export { getAllData, postFilterData, createData };