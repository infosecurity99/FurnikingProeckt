import React from 'react'
import {Container,Content ,Sub,Desc ,Line ,Img,Title2,Title3,Title4,Title5,Title6,Img8} from './style'
import fac from '../../RASIM/facebook.svg'
import Ins from '../../RASIM/instagram.svg'
import lin from '../../RASIM/likdent.svg'
import twi from '../../RASIM/twiter.svg'
import logo1999 from '../../RASIM/logo1999.png'
import '../index.css'
const Footer = () => {
    return (
        <Container>

            <Content sub>
                <Sub><Img8 src={logo1999}/> Furniking</Sub>
                <Desc><a  href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</a></Desc>

                <Line> 
                     <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/"><Img  src={fac}/></a>
                     <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/"><Img  src={Ins}/></a>
                     <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/"><Img  src={lin}/></a>
                     <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/"><Img  src={twi}/></a>
                </Line>

            </Content>

            <Content>
                <Title2>Help</Title2>
                <Title3><a  href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Privacy Policy</a></Title3>
                <Title4><a  href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Shipping & Delivery</a></Title4>
                <Title5><a href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Refund Policy</a></Title5>
                <Title6><a href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Track Your  Order</a></Title6>
            </Content>

            <Content>
               <Title2>Store</Title2>
               <Title3><a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/">Furniture</a></Title3>
               <Title4><a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/">Tabble</a></Title4>
               <Title5><a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/">Sofa</a></Title5>
               <Title6><a  href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Other</a></Title6>
            </Content>
            
            <Content>
               <Title2>Supports</Title2>
               <Title3><a href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Feedbcak  </a></Title3>
               <Title4><a  href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Contact us</a></Title4>
               <Title5><a  href='https://www.linkedin.com/in/zarif-jorayev-a3250b228/'>Download app </a></Title5>
               <Title6><a href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/">Terms conditins</a></Title6>
            </Content>

        </Container>
    )
}

export default Footer
