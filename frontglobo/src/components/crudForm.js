// import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { createData, postFilterData, getAllData } from './AxiosCrud'

// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import '../Style/Form.css'
//https://www.reactjstutorials.com/react-advanced/20/react-use-callback
const CrudForm = (props) => {
    const [inputs, setInputs] = useState({});
    const [getResponse, setGetResponse] = useState({});
    // const [nameForm, setNameForm] = useState(null);
    // const [roleForm, setRoleForm] = useState(null);

    useEffect(() =>  {
        //  getResponseDados.current = getResponse
        //  postFilterData(inputs, setGetResponse)
         console.log("postFilterDataUseEffect: ", getResponse)
      }, [getResponse]);
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
            createData(inputs)
            console.log("all: ", inputs)
        }
        if(props.crud === "postFilterData"){
            event.preventDefault();
            await postFilterData(inputs,setGetResponse)
            // console.log("postFilterData: ", getResponse)
            // console.log("getResponseDados: ", getResponseDados)
        }
        // createData(inputs)
        // console.log("inputs: ",inputs);
        
        // event.preventDefault();
      }


    // All the JSX will go inside this return
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    Name:
                    <input
                    type='text'
                    name='name'
                    value={inputs.name || ""}
                    onChange={handleChange}
                    />
                    Cargo:
                    <input
                    type='text'
                    name='role'
                    value={inputs.role || ""}
                    onChange={handleChange}
                    />
                </div>
                <div className="flex-container">
                
                    <div>Name is: {inputs.name}</div>
                    <div>Role is: {inputs.role}</div>
                </div>
                
                <input type="submit" value="Submit" />
            </form>

            <h3>Resultado</h3>
            {/* {
            getResponse.map( item => (
                    <p key={item._id}>{item.name}</p>
                ))} */}
        </div>
        
    )
}

export default CrudForm