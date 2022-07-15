import axios from "axios";
import { useState, useEffect } from "react";
import '../Style/Form.css'
function AxiosExample() {
    const baseURL = "https://jsonplaceholder.typicode.com/posts";
    const baseURL2 = "http://localhost:4000";
    const [post, setPost] = useState(null);
    const [dataTask, setDataTask] = useState(null);

    useEffect(() => {
      axios.get(`${baseURL}/1`).then((response) => {
        setPost(response.data);
      });
      axios.get(`${baseURL2}/tasks`).then((response) => {
        setDataTask(response.data);
        // console.log("dados: ", response.data)
      });
    }, []);
  
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
  
    if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      
      {dataTask.map( item => (
        <div className="flex-container">
        <div key={item._id + "nome"}>{item.nome}</div> 
        |
        <div key={item._id + "cargo"}>{item.cargo}</div>
        </div>
      ))}
      
      <button onClick={createPost}>Create Post</button>
    </div>
  );
}

export default AxiosExample;