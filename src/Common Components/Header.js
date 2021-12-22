import React from 'react'
import styled from 'styled-components'
// Router Imports
import { NavLink } from 'react-router-dom'

// FontAwesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn,faGithub, } from '@fortawesome/free-brands-svg-icons'

function Header() {
    return (
        <HeaderWrapper>
           <LeftNav>
                <h1>Akshar</h1>
           </LeftNav>
           <RightNav>
               <List>
                <ul>
                    <li>
                        <NavLink exact to="/">
                        Design
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">
                        About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink  to="/Contact">
                        Contact
                        </NavLink>
                    </li>
                </ul>
                </List>
                <Icons>
                    <FontAwesomeIcon icon = {faLinkedinIn}/>
                    <FontAwesomeIcon icon = {faGithub} />
                </Icons>
                <C>&#9400; 2021 Akshar . Made in Delhi</C>
           </RightNav>
        </HeaderWrapper>
    )
}
const HeaderWrapper = styled.div`
   
`
const LeftNav = styled.div`
   
`
const RightNav = styled.div`
   
`
const List = styled.div`
   ul{

   }
`
const Icons = styled.div`
`
const C = styled.div`
`

export default Header
