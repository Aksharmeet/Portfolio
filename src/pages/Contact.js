import React from 'react'
import Header from '../Common Components/Header'
import Footer from '../Common Components/Footer'
import styled from 'styled-components'
function About() {
    return (
        <div>
           <Header/>
            <Intro>
                <h4>
                   Want to Develop a website? 
                   Looking for a react developer?
                   Let's find out how i can help you !  
                </h4>
                <Form>
                    <label for="name">Name:</label>
                    <input id="name" type="text" placeholder="Your Name"></input>
                    <label for="e-mail">E-MAIL:</label>
                    <input id="e-mail" type="text" placeholder="Your Mail-Id"></input>
                    <label for="message">What's this about?</label>
                    <textarea id="message" placeholder="Here You Go..."></textarea>
                    <button type="submit">Send Message</button>
                </Form>
            </Intro>
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
const Form = styled.form`
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
    input{
        margin:10px 0 30px 0;
    }
    textarea{
        margin:10px 0 30px 0;
    
    }
    button{
        padding:20px 0px;
         background-color:rgb(32,28,68);
         color:#fff;
         border-style:none;
         border:0px solid #000;
        
    }
`

export default About
