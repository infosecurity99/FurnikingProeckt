import React from 'react'
import{Container  ,Title, Content ,Card,Img, Position ,Po ,Titles,Button  ,Grow,Img6 ,Span ,SubTitle} from './style' 
import ter1 from '../../RASIM/ter1.png'
import ter2 from '../../RASIM/ter2.png'
import ter3 from '../../RASIM/ter3.png'
import ter4 from '../../RASIM/ter4.png'
import logs from '../../RASIM/logos.png'
const Articles = () => {
    return (
       <Container>
             <Title>Our Latest Articles</Title>
             <Content>

                 <Card>
                    <Img  src={ter2}/>

                    <Position>

                        <Po>
                                 <Grow> 
                                      <Img6  src={logs}/>
                                      <Span>Furniture</Span>
                                 </Grow>

                                 <SubTitle>23 September 2022</SubTitle>
                         </Po>

                        <Titles>Begineer guide buying minimal sofa</Titles>
                        <Button>Read more</Button>
                    </Position>
                 </Card>

                 <Card>
                 <Img  src={ter1}/>

                 <Position>
                 
                     <Po>
                              <Grow> 
                                   <Img6  src={logs}/>
                                   <Span>Furniture</Span>
                              </Grow>

                              <SubTitle>23 September 2022</SubTitle>
                      </Po>

                     <Titles>Buying best minimal computer table</Titles>
                     <Button>Read more</Button>
                 </Position>
                 </Card>

                 <Card>
                 <Img  src={ter4}/>

                 <Position>
                 
                     <Po>
                              <Grow> 
                                   <Img6  src={logs}/>
                                   <Span>Furniture</Span>
                              </Grow>

                              <SubTitle>23 September 2022</SubTitle>
                      </Po>

                     <Titles>How to choose best modern bench</Titles>
                     <Button>Read more</Button>
                 </Position>
                 </Card>

                 <Card>
                 <Img  src={ter3}/>

                 <Position>
                 
                     <Po>
                              <Grow> 
                                   <Img6  src={logs}/>
                                   <Span>Furniture</Span>
                              </Grow>

                              <SubTitle>23 September 2022</SubTitle>
                      </Po>

                     <Titles>Best Summer Outfit Style in this Country</Titles>
                     <Button>Read more</Button>
                 </Position>
                 </Card>
   
             </Content>
       </Container>
    )
}

export default Articles
