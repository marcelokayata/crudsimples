import { useState, useEffect } from "react";
import '../Style/Form.css'
import { getAllData } from './AxiosCrud'
function AllDataPosts() {
    const [dataTask, setDataTask] = useState(null);

    useEffect(() => {
      getAllData(setDataTask)
    }, [dataTask]);
  
    
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
      
    </div>
  );
}

export default AllDataPosts;