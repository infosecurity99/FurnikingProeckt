import React from 'react'
import {Container,Left ,Right, Img,Word ,Title, SubTitle,Arow,Arows,Top,Bottom,Img1,Word1,Title1,SubTitle1,Arow1} from './style'
import rasim1 from '../../RASIM/rasim1.png'
import rasim2 from '../../RASIM/rasim2.png'
import rasim3 from '../../RASIM/rasim3.png'
import arow from '../../RASIM/arow.png'
const Showes = () => {
    return (
        <Container>
             <Left>
                <Img src={rasim1}/>
                <Word>
                  <Title>Modern Furniture Collections</Title>
                  <SubTitle>Starting from $500</SubTitle>
                  <Arow>Read more <Arows  src={arow}/></Arow>
                </Word>
             </Left>

             <Right>

                  <Top>
                     <Img1 src={rasim1}/>
                     <Word1>
                        <Title1>Modern Furniture Collections</Title1>
                        <SubTitle1>Starting from $500</SubTitle1>
                        <Arow1>Read more <Arows  src={arow}/></Arow1>
                     </Word1>
                  </Top>

                  <Bottom>
                       <Img1 src={rasim2}/>
                     <Word1>
                        <Title1>Minimal Sofa collections </Title1>
                        <SubTitle1>Sale upto 40% discount</SubTitle1>
                        <Arow1>Read more <Arows  src={arow}/></Arow1>
                     </Word1>
                  </Bottom>

             </Right>
        </Container>
    )
}

export default Showes
