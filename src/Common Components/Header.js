import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
// Router Imports
import { NavLink } from 'react-router-dom'

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
function Header() {

    const [status, setStatus] = useState(true);

    const OpenClose = () => {
        if(status == true){
            setStatus(false)
        } else{
            setStatus(true)
        }
    }
    return (
        <HeaderWrapper>
            <Desktop>
           <LeftNav>
               <NavLink to="/">
                <h1>Akshar &trade;</h1>
                </NavLink>
           </LeftNav>
           <RightNav status = {status}>
           <CloseContainer onClick={OpenClose}><FontAwesomeIcon icon={faTimes} size = "3x"/></CloseContainer>
               <List>
                <ul>
                    <li>
                        <NavLink to="/">
                        Design
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">
                        About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">
                        Contact
                        </NavLink>
                    </li>
                </ul>
                </List>
                <Icons>
                    <div><FontAwesomeIcon icon = {faLinkedinIn} size = "2x"/></div>
                    <div><FontAwesomeIcon icon = {faGithub} size = "2x"/></div>
                </Icons>
                <C>&#9400; 2021 Akshar . Made in Delhi</C>
           </RightNav>
           </Desktop>
           <Mobile >
                <div onClick={OpenClose}><FontAwesomeIcon icon ={faBars} size = "2x"/></div>
           </Mobile>
           
        </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`
    background-color:rgb(244,232,217);
    color:#1f1c44;
    font-family:Raleway, sans;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 20px 0;
    @media (min-width:860px){
       
    }
`
const LeftNav = styled.div`
    padding-left:1rem;
    h1{
        font-weight:500;
        font-size:2rem;
    }
    @media(min-width:860px){
       
        h1{
            font-size:2rem;
        }
    }
   
`
const CloseContainer = styled.div`
    position:absolute;
    right:5vw;
    top:10px;
    cursor:pointer;
    @media( min-width:860px){
        display:none;
    }

`
const RightNav = styled.div`
    transform: ${props => props.status ? "translateX(100vw) ScaleX(0)" : "translateX(0) ScaleX(1)"};
    transition:transform .5s;
    overflow-x: hidden;
    position:absolute;
    z-index:100;
    top:0;
    @media (min-width:860px){
        transform:translateX(0) Scale(1);
        position:static;
       

    }

`
const List = styled.div`
    background-color:rgb(244,232,217);
    height:80vh;
    width:100vw;
   ul{
       
       background-color:rgb(244,232,217);
       display:flex;
       flex-direction:column;
    a{
        color:#1f1c44;
        text-decoration:none;
        font-weight:600;
        font-size:3em;
      
    }
    li{
        margin-left:1rem;
        padding-top:10%;
        list-style:none;
    }
   }
   @media (min-width:860px){
       height:auto;
       width:auto;
       margin:0 auto;
    //  
       ul{
            flex-direction:row;
            a{
                font-weight:500;
                font-size:1.5rem;

            }
           li{
                 padding-top:0;
                 margin-left:0rem;
                 margin-right:1rem;
                 
             }
        }
   }
`
const Icons = styled.div`
    background-color:rgb(244,232,217);
    height:10vh;
    padding-left:1rem;
    display:flex;
    gap:1rem;
    @media (min-width:860px){
        display:none;
    }
   
`
const C = styled.div`
    background-color:rgb(244,232,217);
    height:10vh;
    padding-left:1rem;
    @media (min-width:860px){
        display:none;
    }

`
const Desktop = styled.div`
    @media (min-width:860px){
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100vw;
    }
`

const Mobile = styled.div`
    padding-right:2rem;
    svg{
        cursor:pointer;
    }
    @media (min-width:860px){
        display:none;
    }
   
`
export default Header
