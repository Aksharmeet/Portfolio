import React from 'react'
import Header from '../Common Components/Header'
import Footer from '../Common Components/Footer'
import styled from 'styled-components'
import '../animations.css'
function Home() {
    return (
        <HomeWrapper>
            <Header/>
            <Intro>
                <p>
                    I am a front-end developer with specilization in React.js
                </p>
                <div  className="heartbeat" >
                    <a href="mailto:aksharmeetsingh21@gmail.com"> 
                        <p>
                        aksharmeetsingh21@gmail.com 
                        <img src="https://uploads-ssl.webflow.com/5d0f20ee6c004646f3c81f02/615bf8db0a1498233ce772d6_arrow-01.svg"/>
                        </p>
                    </a>
                 
                </div>
            </Intro>
            <Projects>
                <Project>
                    <a>
                    <ImageWrapper>
                    <img className = "tesla-desktop" src="./images/Screenshot 2021-12-23 at 5.27.36 PM.png"></img>
                    <img className = "tesla-mobile" src="./images/Screenshot 2021-12-23 at 5.29.13 PM.png"></img>
                    </ImageWrapper>
                    <p>Tesla Website Clone</p>
                    </a>

                </Project>
            </Projects>
            <Footer/>
        </HomeWrapper>
    )
}
const HomeWrapper = styled.div`
    
`
const Intro = styled.div`
    padding:60px 40px;
    font-size:3rem;
    font-weight: 600;
    }
    div{
        padding-top:40px;
        
        trnsition:transform .5s;
        p{
            display:flex;
            align-items:center;
            gap:20px;
            font-size:1.5rem;
            font-weight:500;
        }
        img{
            width:5%;
        }
        :hover{
           
        }
    }
   @media (min-width:1000px) {
    font-size:5rem;
    font-weight: 600;
    max-width:1100px;
   
   
`
const Projects = styled.div`
    width:100%;
    padding:0 40px;
    

`
const Project = styled.div`
background-color:#87ceeb;
padding:40px;
border-radius:10px;
border:5px solid #000;
max-width:700px;
margin:0 auto;
    .tesla-desktop{
        width:80%;
        margin:0 0 10% 0;
        border-radius:10px;
        border:2px solid #000;
        position:relative;
        left:5%;
    }
    .tesla-mobile{
        width:20%;
        position:relative;
        right:10%;
        border-radius:10px;
        border:2px solid #000;
    } 
   p{
       font-size:1.5rem;
       font-family:cinzel;
       font-weight:500;
   }
`
const ImageWrapper = styled.div`
    transition: transform .3s;
   
        :hover{
            transform:Scale(1.1);
        }
`
export default Home
