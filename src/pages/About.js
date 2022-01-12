import React from 'react'
import Header from '../CommonComponents/Header'
import Footer from '../CommonComponents/Footer'
import styled from 'styled-components'
function Contact() {
    return (
        <div>
            <Header/>
                <Main>
                <h2>Front-end Developer and Constantly curious learner,
                 currently learning and exploring new avenues.</h2>
                 <h4>
                    Skills
                </h4>
                <SkillsWrapper>
                   
                    <div>
                       <h5>#Languages:</h5> 
                        <p>1. Javascript</p>
                        <p>2. HTML</p>
                        <p>3. CSS</p>
                    </div>
                    <div>
                       <h5>#Library:</h5> 
                        <p>1. React</p> 
                        <p>2. Redux</p>
                        <p>3. Fontawsome</p> 
                        <p>4. React-Router</p>
                    </div>
                    <div>
                       <h5>#Package Manager:</h5> 
                        <p>1. npm</p>
                        <p>2. yarn</p>
                    </div>
                    <div>
                       <h5>#Others:</h5> 
                        <p>1. Rest API</p>
                        <p>2. Figma</p>
                    </div>
                    
                </SkillsWrapper>
                
                </Main>
            <Footer/>
        </div>
    )
}
const Main = styled.div`
    padding:0 20px;
    margin:40px 0;
    max-width: 1000px;
    h2{
        font-size:2.3rem;
        margin-bottom:40px;
    }
    h4{
        font-size:2rem;
        margin:40px auto;
        font-weight:400;
        :after{
            content: "";
            display:block;
            width:80vw;
            height:3px;
            background-color:#1f1c44;
            position:relative;
            left:0px;
            bottom:0px;
        }
    }
   
    h5{
        font-size:1.5rem;
        margin:40px 0;
        font-weight:400;
        background-color:#ffd12d;
        width:80vw;
        padding:5px 5px;
    }
    p{
        font-size:1.3rem; 
        line-height:3rem;
    }

       
    
    @media (min-width:860px){
        h2{
            font-size:3rem;  
        }
    }
    @media (max-width:330px){
        h2{
            font-size:1.9rem;
        }
    }
    
            
    
`
const SkillsWrapper = styled.div`
    @media (min-width:1000px){
        h5{
            font-size:1.5rem;
            margin:40px 0;
            font-weight:400;
            background-color:#ffd12d;
            width:40vw;
            max-width:460px;
            padding:5px 5px;
           
            }
        display:flex;
        flex-wrap:wrap;
    }
`
export default Contact
