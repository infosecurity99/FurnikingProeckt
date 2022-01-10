import React from 'react'
import {Containers ,Cards,Img ,Title,Desc,Right} from './style'
import gift from '../RASIM/gift.png'
import headphone from '../RASIM/headphone.png'
import walet from '../RASIM/walet.png'
import free from '../RASIM/free.png'
const Reklama = () => {
    return (
        <Containers>

             <Cards>
                 <Img src={gift}/>
                 <Right>
                     <Title>Free Shipping</Title>
                     <Desc>Orders over $100</Desc>
                 </Right>
             </Cards>
             
             <Cards>
             <Img src={headphone}/>
             <Right>
                 <Title>Free Shipping</Title>
                 <Desc>Orders over $100</Desc>
             </Right>
         </Cards>

          <Cards>
                 <Img src={walet}/>
                 <Right>
                     <Title>Free Shipping</Title>
                     <Desc>Orders over $100</Desc>
                 </Right>
             </Cards>

             <Cards>
             <Img src={free}/>
             <Right>
                 <Title>Free Shipping</Title>
                 <Desc>Orders over $100</Desc>
             </Right>
         </Cards>
        </Containers>
    )
}

export default Reklama
