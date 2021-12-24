import React, {useState} from 'react'
import styled from 'styled-components'

function FormInput(props) {
    const {label, errorMessage, onChange, ...inputProps}= props;
    const [Focused, SetFocus] = useState(false);
    const handleFocus = () =>{
        SetFocus(true);
    }
    
    return (
        <div>
       <Form Focused={Focused}>
           <label>{label}</label>
           <input  {...inputProps} onChange={onChange} onBlur={handleFocus}   Focused={Focused.toString()} > 
           </input>
           <span><p>{errorMessage}</p></span>
       </Form>
       
       </div>
    )
}

const Form = styled.div`
    margin-top:50px;
    display:flex;
    flex-direction:column;
    font-family:raleway;
    font-size:1.5rem;
    font-weight:500;
   
    input, textarea, button{
        font-size:1.3rem;
        padding:15px 10px;
        border-radius:5px;
        border-style:none;
        border:3px solid #000;

    }
    span{
        display:none;
    }
    input{
        margin:10px 0 0 0;
        
    }
    input:invalid[Focused="true"] {
        border: 3px solid red;
    }
    input:invalid[Focused="true"] ~ span{
        display:block;
    }
    textarea{
        margin:10px 0 30px 0;
    
    }
   
  
    p{
        margin:8px 0 0px 0;
        font-weight:400;
        font-size:1.2rem;
        color:red;
       

    }

`



export default FormInput
