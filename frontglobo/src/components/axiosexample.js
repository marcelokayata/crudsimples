import axios from "axios";
import { useState, useEffect } from "react";
import '../Style/Form.css'
import { getAllData } from './AxiosCrud'
function AxiosExample() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const baseURL2 = "http://localhost:4000";
    const [post, setPost] = useState(null);
    const [dataTask, setDataTask] = useState(null);

    useEffect(() => {
      getAllData(setDataTask)
    }, [dataTask]);
  
    function createPost() {
      axios
        .post(baseURL, {
          title: "Hello World!",
          body: "This is a new post."
        })
        .then((response) => {
          setPost(response.data);
        });
    }
  
    if (!dataTask) return "No data"
  return (
    <div>
      <h1>Dado geral</h1>
      {dataTask.map( item => (
        
        <div className="border-materia" >
          <div key={item._id + "nomeaxios"}>{item.titulo}</div> 
          <br/>
          <div key={item._id + "cargoaxios"}>{item.conteudo}</div>
          <div key={item._id + "dataaxios"}>{item.Created_date.substring(0, 10) }</div>
        </div>
      ))}
      
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default AxiosExample;