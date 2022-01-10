import React from 'react'
import {Container  ,Left ,Right , Img  ,Title  ,Content, Pos1,Pos2 ,Lefter ,Title2, Desc ,Line ,Button,SumaLine,Suma  ,Cicle,Cricle ,Text,Text1,salom} from './style'
import rec1 from '../../RASIM/rec1.png'
import rec2 from '../../RASIM/rec2.png'
const Speker = () => {
    return(
       <Container>
              <Title>SPECIAL OFFER</Title><Content>

            <Left>
                <Img src={rec1} />
                <Pos1>40% off</Pos1>
                <Lefter>
                       <Title2>Living Room Furniture</Title2>
                       <Desc>You don't have a chair. Are you ready for growth? Shop with us 40% discount!</Desc>
                  <Line>
                       <Suma>$150</Suma> 
                       <SumaLine>$250</SumaLine>
                       <Button>SHOP NOW</Button>
                  </Line>
                  <Cicle>

                     <Cricle>
                        <Text>10</Text><Text1>Dats</Text1>
                     </Cricle>

                       <Cricle>
                        <Text>15</Text><Text1>HRS</Text1>
                     </Cricle>

                       <Cricle>
                        <Text>30</Text><Text1>MIN</Text1>
                     </Cricle>

                       <Cricle>
                        <Text>22</Text><Text1>secs</Text1>
                     </Cricle>
                  </Cicle>
                </Lefter>
            </Left>

            <Right>
                <Img src={rec2} />
                <Pos2>50% off</Pos2>
                   <Lefter>
                       <Title2>Modern chair</Title2>
                       <Desc>Hot chairs of the modern era are now available in our stock.</Desc>
                  <Line>
                       <Suma>$75</Suma> 
                       <SumaLine>$150</SumaLine>
                       <Button>SHOP NOW</Button>
                  </Line>
                  <Cicle>

                     <Cricle>
                        <Text>15</Text><Text1>Dats</Text1>
                     </Cricle>

                       <Cricle>
                        <Text>08</Text><Text1>HRS</Text1>
                     </Cricle>

                       <Cricle>
                        <Text>20</Text><Text1>MIN</Text1>
                     </Cricle>

                       <Cricle>
                        <Text>12</Text><Text1>secs</Text1>
                     </Cricle>
                  </Cicle>
                </Lefter>

            </Right>

        </Content>
       </Container>
    )
}

export default Speker
