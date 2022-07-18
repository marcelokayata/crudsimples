import axios from "axios";
const baseURL = "http://localhost:4000";
function getAllData(setGetResponse) {
    
    axios.get(`${baseURL}/tasks`).then((response) => {
        setGetResponse(response.data);
      });
  }
function updateData(inputs,setGetResponse){
  console.log("updateData: ", inputs)
  axios.put(`${baseURL}/tasks`,[
    {
        "titulo": inputs.titulo1,
        "conteudo": inputs.conteudo1
    },
    {
        "titulo": inputs.titulo2,
        "conteudo": inputs.conteudo2
    }  
  ]).then((response) => {
    setGetResponse(response.data);
    console.log("dados: ", response.data)
  });
}
function postFilterData(nomeData, setGetResponse) {
  console.log("inside filter: ", nomeData)
    axios.post(`${baseURL}/tasksfind`, {
        
        titulo: nomeData.titulo,
        conteudo: nomeData.conteudo
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

    axios.post(`${baseURL}/tasks`, {
        titulo: formData.titulo,
        conteudo: formData.conteudo
      })
      .then(function (response) {
        setGetResponse([response.data])
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function deleteData(formData, setGetResponse) {
    console.log("delete: ", formData)
    console.log("titulo: ", formData.titulo)
    axios.delete(`${baseURL}/tasks`, {
        titulo: formData.titulo,
        conteudo: formData.conteudo
      })
      .then(function (response) {
        setGetResponse([response.data])
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  
export { getAllData, postFilterData, createData, updateData, deleteData };