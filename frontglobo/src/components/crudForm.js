// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { createData, postFilterData, getAllData, updateData, deleteData } from './AxiosCrud'
import '../Style/Form.css'

const CrudForm = (props) => {
    const [inputs, setInputs] = useState({});
    const [getResponse, setGetResponse] = useState({});
    const [getAllDataFrame, setgetAllDataFrame] = useState({});

    useEffect(() =>  {
         getAllData(setgetAllDataFrame)
      }, [getResponse, getAllDataFrame]);
    function handleChange(event)  {
        event.preventDefault();
          
        
        // seleciona o campo e guarda os valores de cada campo
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      };
    
      async function handleSubmit(event)  {
        if(props.crud === "createData"){
            event.preventDefault();
            await createData(inputs, setGetResponse)
            
        }
        if(props.crud === "postFilterData"){
            event.preventDefault();
            await postFilterData(inputs,setGetResponse)
        }
        if(props.crud === "getAllData"){
            event.preventDefault();
            await getAllData(setGetResponse)
        }
        if(props.crud === "updateData"){
            event.preventDefault();
            await updateData(inputs,setGetResponse)
        }
        if(props.crud === "deleteData"){
            event.preventDefault();
            await deleteData(inputs,setGetResponse)
        }
      }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className='vertical'>
                    <p>Título:</p>
                    <input
                    type='text'
                    name='titulo'
                    value={inputs.titulo || ""}
                    onChange={handleChange}
                    />
                    <p>Conteúdo:</p>
                    <textarea
                    type='text'
                    name='conteudo'
                    value={inputs.conteudo || ""}
                    onChange={handleChange}
                    />
                </div>
                <div >
                
                    <div>Título: {inputs.titulo}</div>
                    <div>Conteúdo: {inputs.conteudo}</div>
                </div>
                
                <input type="submit" value="Submit" />
            </form>

            <h3>Resultado</h3>
            
            {Array.isArray(getResponse) ? getResponse.map( item => (
        <div className="border-materia">
        <div key={item._id + "nome"}>Título: {item.titulo}</div> 
        |
        <div key={item._id + "cargo"}>Conteúdo: {item.conteudo}</div>
        </div>
            )): "Sem dados" }
        </div>
        
    )
}

export default CrudForm