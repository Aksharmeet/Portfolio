import React, {useState} from 'react'
import Header from '../../Common Components/Header'
import Footer from '../../Common Components/Footer'
import styled from 'styled-components'

// Importing formInputs
import FormInput from './FormInput'

// Importing FontAwesom
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
function About() {
    const [values, setValues] = useState({
        username:"",
        email: "",
        message: "",
    })
    const Inputs = [
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Your name??",
            errorMessage:"Name should be 3-16 characters and shouldn't include any special characters(example:!,@,#,$) !",
            label:"Username",
            pattern:"^[A-Za-z0-9]{3,16}$",
            required: true,

        },
        {
            id:2,
            name:"email",
            type:"email",
            placeholder:"Your e-mail",
            errorMessage:"Enter a valid e-mail address",
            label:"E-mail",
            required: true,

        },
        {
            id:3,
            name:"message",
            type:"text",
            placeholder:"Here you go...",
            errorMessage:"Message must be of atleast 50 characters and must not include any special characters",
            label:"Message",
            required: true,
        }
    ]
    const [SubmitState, setSubmitState] = useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(e.target.checkValidity()){
            setSubmitState(true)
        } else{
            setSubmitState(false)
        }
    }
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value})
    }
    return (
        <div>
           <Header/>
            <Intro>
                <h4>
                   Want to Develop a website? 
                   Looking for a react developer?
                   Let's find out how i can help you !  
                </h4>
                
            </Intro>
            <FormActual onSubmit={handleSubmit} SubmitState={SubmitState}>
            {Inputs.map((input) => (
                <FormInput key={input.id} {...input} onChange={onChange} value={values[input.name]}  />
            ))}
            <button>Submit</button>
            </FormActual>
            <Submitted SubmitState={SubmitState}>
            <div>
            <FontAwesomeIcon icon={faCheckCircle} size="2x"/>
            <p>  Your mail has been sent !!<br/>
             We will get back as soon as possible.</p>
             </div>
            </Submitted>
            <Footer/>
        </div>
    )
}
const Intro = styled.div`
    font-family:raleway;
    font-size:2rem;
    margin:50px auto;
    padding: 0 40px;
    @media (min-width:760px){
        font-size:3rem;
    }
    @media(min-width:1100px){
        font-size:4rem;
    }
    
`
const FormActual = styled.form`
    padding:0 40px;
    display: ${props => props.SubmitState ? "none" : "block"};
    button{
        width:100%;
        font-family:raleway;
        font-size:1.5rem;
        font-weight:500;
        padding:20px 0px;
        background-color:rgb(32,28,68);
        color:#fff;
        border-style:none;
        border:0px solid #000;
        margin:60px auto;
        border-radius:5px;
        cursor:pointer;
    }

`
const Submitted = styled.div`
    display: ${props => props.SubmitState ? "block" : "none"};
    padding:0 40px;
    margin:0 auto;
    margin-bottom:50px;
    div{
        padding:20px 0px 20px 10px;
        font-size:1.5rem;
        background-color:green;
        color:#fff;
        border-radius:5px;
        display:flex;
        align-items:center;
    }
    p{
        margin-left:10px;
    }
`

export default About
