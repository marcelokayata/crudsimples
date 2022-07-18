// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { createData, postFilterData, getAllData, updateData, deleteData } from './AxiosCrud'

// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import '../Style/Form.css'
//https://www.reactjstutorials.com/react-advanced/20/react-use-callback
const CrudForm = (props) => {
    const [inputs, setInputs] = useState({});
    const [getResponse, setGetResponse] = useState({});
    const [getAllDataFrame, setgetAllDataFrame] = useState({});

    useEffect(() =>  {
        //  console.log("postFilterDataUseEffect: ", getResponse)
        //  console.log("getResponse cargo: ", getResponse.data)
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
        // alert('A name was submitted: ' + nameForm);
        if(props.crud === "createData"){
            event.preventDefault();
            await createData(inputs, setGetResponse)
            // console.log("all: ", inputs)
            console.log("getResponse create Data: ", getResponse.data?.cargo)
            
        }
        if(props.crud === "postFilterData"){
            event.preventDefault();
            await postFilterData(inputs,setGetResponse)
            // console.log("postFilterData: ", getResponse)
            // console.log("getResponseDados: ", getResponseDados)
        }
        if(props.crud === "getAllData"){
            event.preventDefault();
            await getAllData(setGetResponse)
            // console.log("postFilterData: ", getResponse)
            // console.log("getResponseDados: ", getResponseDados)
        }
        if(props.crud === "updateData"){
            event.preventDefault();
            await updateData(inputs,setGetResponse)
            // console.log("postFilterData: ", getResponse)
            // console.log("getResponseDados: ", getResponseDados)
        }
        if(props.crud === "deleteData"){
            event.preventDefault();
            await deleteData(inputs,setGetResponse)
            // console.log("postFilterData: ", getResponse)
            // console.log("getResponseDados: ", getResponseDados)
        }
        // createData(inputs)
        // console.log("inputs: ",inputs);
        
        // event.preventDefault();
      }

    //   if (!getResponse) return "Nada!"
    // All the JSX will go inside this return
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