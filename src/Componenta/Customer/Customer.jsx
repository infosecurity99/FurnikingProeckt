import React from 'react'
import {Container ,Title,Wraper,Img ,Prev  ,Item ,Pro ,Text,Desc} from './style'
import Carousel from 'react-elastic-carousel'
import girl from '../../RASIM/girl.png'
import './index.css'
const Customer = () => {
    return (
      <Container>
          <Title>What Our Customer Says</Title>

           <Wraper>
                  <Carousel itemsToShow={1} >
                     <Item>  
                     <Img  src={girl}/>
                      <Text>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</Text>
                      <Desc>Angelina Joly</Desc>
                      <Pro>Co-founder</Pro>
                     </Item>
                      
                      <Item>  
                     <Img  src={'https://pngimg.com/uploads/bruce_lee/bruce_lee_PNG17.png'}/>
                      <Text>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</Text>
                      <Desc>Angelina Joly</Desc>
                      <Pro>Co-founder</Pro>
                     </Item>

                     <Item>  
                     <Img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh0nE_GQSRtWliR6emUEmUR2ENH06UGYe4g&usqp=CAU'}/>
                      <Text>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</Text>
                      <Desc>Angelina Joly</Desc>
                      <Pro>Co-founder</Pro>
                     </Item>

                     <Item>  
                     <Img  src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKKwhQLyCxTnynAaDpPBzDIO90aGMdil8Y0w&usqp=CAU'}/>
                      <Text>I like Furniking.com and as compared to other company it's polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.</Text>
                      <Desc>Angelina Joly</Desc>
                      <Pro>Co-founder</Pro>
                     </Item>
                 </Carousel>
           </Wraper>
      </Container>
    )
}

export default Customer
