import React from 'react'
import { NavLink } from 'react-router-dom'

// Icons Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'
function Footer() {
    return (
        <FooterWrapper>
            <List>
            <ul>
                <NavLink to="/">
                    <li>
                        Design
                    </li>
                </NavLink>
                <NavLink to="/About">
                    <li>
                        About
                    </li>
                </NavLink>
                <NavLink to="/Contact">
                    <li>
                        Contact
                    </li>
                </NavLink>
            </ul>
            </List>
            <Icons>
                <div><p>&#9400;2021 Akshar&trade;. Made In Delhi</p></div>
                <div>
                    <FontAwesomeIcon icon = {faLinkedin} size = "2x"/>
                    <FontAwesomeIcon icon = {faGithub} size = "2x"/>
                </div>
            </Icons>
        </FooterWrapper>
    )
}
const FooterWrapper = styled.footer`
    font-family:Raleway, sans;
    background-color:rgb(244,232,217);
    color:#1f1c44;
   
`
const List = styled.footer`
    border-top:1px solid rgb(220,210,198);
    ul{
       
        display:flex;
        list-style:none;
    }
    li{
        margin: 2rem .5rem 1rem .5rem;
    }
    a{
        text-decoration:none;
        color:#1f1c44;
        font-weight:400;
        font-size:1.5rem;
        
    }
`
const Icons = styled.footer`
    border-top:1px solid rgb(220,210,198);
    padding-top:10px;
    
    div{
       
        padding:0rem .5rem 1rem .5rem;
      
        
    }
    svg{
        margin-right:15px;
    }
`

export default Footer
 