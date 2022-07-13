// import axios from 'axios'
import React, { useState } from 'react'
import { createData } from './AxiosCrud'
//https://www.reactjstutorials.com/react-advanced/20/react-use-callback
const CrudForm = () => {
    const [inputs, setInputs] = useState({});
    // const [nameForm, setNameForm] = useState(null);
    // const [roleForm, setRoleForm] = useState(null);

    function handleChange(event)  {
        event.preventDefault();
          
        
        // seleciona o campo e guarda os valores de cada campo
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      };
    
    function handleSubmit(event) {
        // alert('A name was submitted: ' + nameForm);
        
        event.preventDefault();
        console.log(inputs);
        createData(inputs)
        event.preventDefault();
      }


    // All the JSX will go inside this return
    return(
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
            <div>Name is: {inputs.name}</div>
            <div>Role is: {inputs.role}</div>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default CrudForm