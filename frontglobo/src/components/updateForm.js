// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { getAllData, updateData } from './AxiosCrud'
import '../Style/Form.css'

const UpdateForm = (props) => {
    const [inputs, setInputs] = useState({});
    const [getResponse, setGetResponse] = useState({});
    const [getAllDataFrame, setgetAllDataFrame] = useState({});
    const [getWarnUpdate, setWarnUpdate] = useState("Não atualizado");

    useEffect(() =>  {
         getAllData(setgetAllDataFrame)
      }, [getResponse, getAllDataFrame]);
    function handleChange(event)  {
        event.preventDefault();
          
        
        // seleciona o campo e guarda os valores de cada campo
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
        setWarnUpdate("Não atualizado")
      };
    
      async function handleSubmit(event)  {
        if(props.crud === "updateData"){
            event.preventDefault();
            await updateData(inputs,setGetResponse)
            setWarnUpdate("Atualizado")
        }
      }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div className='vertical'>
                    <h4>Pesquisar</h4>
                    <p>Título:</p>
                    <input
                    type='text'
                    name='titulo1'
                    value={inputs.titulo1 || ""}
                    onChange={handleChange}
                    />
                    <p>Conteúdo:</p>
                    <textarea
                    type='text'
                    name='conteudo1'
                    value={inputs.conteudo1 || ""}
                    onChange={handleChange}
                    />
                </div>
                <div className='vertical'>
                    <h4>Alterar</h4>
                    <p>Título2:</p>
                    <input
                    type='text'
                    name='titulo2'
                    value={inputs.titulo2 || ""}
                    onChange={handleChange}
                    />
                    <p>Conteúdo2:</p>
                    <textarea
                    type='text'
                    name='conteudo2'
                    value={inputs.conteudo2 || ""}
                    onChange={handleChange}
                    />
                </div>
                <div >
                
                    <div>Título1: {inputs.titulo1}</div>
                    <div>Conteúdo1: {inputs.conteudo1}</div>
                </div>
                
                <input type="submit" value="Submit"  />
            </form>

            <h3>Resultado</h3>
            
            {Array.isArray(getAllDataFrame) ? 
            <div className="border-materia">
                <div >{getWarnUpdate}</div>
            </div>
            : "Sem dados" }
        </div>
        
    )
}

export default UpdateForm