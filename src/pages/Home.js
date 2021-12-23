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
            <Footer/>
        </HomeWrapper>
    )
}
const HomeWrapper = styled.div`
    
`
const Intro = styled.div`
    padding:60px 70px;
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

export default Home
