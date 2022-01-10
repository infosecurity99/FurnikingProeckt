import React from 'react'
import {Container ,Ul, Li ,Navbar,Content,Title1,Right,Left,Title2,Title3,Button,Item,Wrap,Wrapers,Img,Cards,Imgs,Suma,MiniTitle}  from './style'
import Carousel from 'react-elastic-carousel'
import './grow.css'
import sal1 from '../../RASIM/sal1.png'
import sal2 from '../../RASIM/sal2.png'
import sal3 from '../../RASIM/sal3.png'
import rel1 from '../../RASIM/sal4.png'
import rel2 from '../../RASIM/sal5.png'
import rel3 from '../../RASIM/sal6.png'
import rel4 from '../../RASIM/sal7.png'
const Body = () => {
    return (
        <Container>
              <Navbar>
                    <Ul>
                      <Li>All</Li>
                      <Li>New Arrivals</Li>
                      <Li>Hot Sale</Li>
                      <Li>Furniture</Li>
                      <Li>Amrature</Li>
                      <Li>Tabble</Li>
                      <Li>Chair</Li>
                      <Li>Sofa</Li>
                      <Li>Mirrors</Li>
                      <Li>Stools</Li>
                      <Li>Benches</Li>
                    </Ul>
              </Navbar>

            <Content>

               <Right>
                   <Title1>TOP COLLECTIONS 2022</Title1>
                   <Title2>We Serve Your  Dream Furniture</Title2>
                   <Title3>Get 50% off all products</Title3>
                   <Button>SHOP NOW</Button>
               </Right>

               <Left>
                      <Wrap>
                          <Carousel itemsToShow={1}   className='carusel'>
                              <Item><Img  src={rel1}/></Item>
                              <Item><Img src={rel2}/></Item>
                              <Item><Img src={rel3}/></Item>
                              <Item><Img src={rel4}/></Item>
                         </Carousel>
                      </Wrap>

                      <Wrapers>
                           <Cards>
                              <Imgs  src={sal1}/>
                              <Suma>$120</Suma>
                              <MiniTitle>Office Desk Chair</MiniTitle>
                           </Cards>

                           <Cards>
                               <Imgs  src={sal2}/>
                               <Suma>$120</Suma>
                               <MiniTitle>Office Desk Chair</MiniTitle>
                           </Cards>

                           <Cards>
                             <Imgs src={sal3}/>
                            <Suma>$120</Suma>
                            <MiniTitle>Office Desk Chair</MiniTitle>
                           </Cards>
                      </Wrapers>
               </Left>
            </Content>
        </Container>
    )
}

export default Body
