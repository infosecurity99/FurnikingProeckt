import React from 'react'
import solo from '../../RASIM/solo.png'
import {Container,Headers,Logo ,Title,Navbar,Ul,Li} from './style'
const DashbaordNavbar = () => {
    return (
        <Container>
                <Headers>  
                      <Logo src={solo}/> 
                      <Title>ALL COLLECTIONS</Title>  
                 </Headers>
                <Navbar>
                         <Ul>
                             <Li>HOME</Li>
                             <Li>SHOP</Li>
                             <Li>BLOG</Li>
                             <Li>ABOUT</Li>
                             <Li>CONTACT US</Li>
                        </Ul>
                </Navbar>
        </Container>
    )
}

export default DashbaordNavbar
