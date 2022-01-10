import React from 'react'
import {Container,Title ,Ul ,Li ,Content, Card ,CardImg ,Img ,CardBody,Titles,SubTitle , Star,Suma,Strike ,Imgs2,Position, Actives1,Position2,Img3,ImgContent,Img5 ,Img6} from './style'
import ratings from '../../RASIM/ratings.png'
import Conte from '../../RASIM/Container.png'
import eye from '../../RASIM/eye.png'
import nen from '../../RASIM/nen.png'
import fishing from '../../RASIM/fishing.png'
import heart from '../../RASIM/heart.png'
import rel1 from '../../RASIM/rel1.png'
import rel2 from '../../RASIM/rel2.png'
import rel3 from '../../RASIM/rel3.png'
import rel4 from '../../RASIM/rel4.png'
import rel5 from '../../RASIM/rel5.png'
import rel6 from '../../RASIM/rel6.png'
import Group from '../../RASIM/Group.png'
import Circle from '../../RASIM/Circle.png'

const Products = () => {
    return (
        <Container>
            <Title sel>OUR PRODUCTS</Title>
            <Ul  sel >
                  <Li >All Products</Li>
                  <Li>  Best Sellers</Li>
                  <Li>New Arrivals</Li>
                  <Li>Todays Deals</Li>
            </Ul>
            <Content>
                <Card>
                   <CardImg>
                         <Img  src={rel1}/>
                         <Position  size>New</Position>
                         <Position2>
                            <ImgContent>
                                  <Img3 src={heart}/>
                            </ImgContent>
                            
                            <ImgContent>
                                  <Img3 src={nen}/>
                            </ImgContent>
                             
                            <ImgContent>
                                  <Img3 src={fishing}/>
                            </ImgContent>
                              
                            <ImgContent>
                                 <Img3 src={eye}/>
                            </ImgContent>
                         </Position2>
                   </CardImg>
                   <CardBody>
                     <Titles>Chair</Titles>
                     <SubTitle>Minimal LCD chair</SubTitle>
                     <Star>
                        <Suma>$180 <Strike>$250</Strike></Suma>
                        <Imgs2 src={ratings}/>  
                     </Star>
                   </CardBody>
                </Card>
 
                <Card>
                <CardImg>
                      <Img  src={rel2}/>
                      <Position>New</Position>
                      <Position2>
                         <ImgContent>
                               <Img3 src={heart}/>
                         </ImgContent>
                         
                         <ImgContent>
                               <Img3 src={nen}/>
                         </ImgContent>
                          
                         <ImgContent>
                               <Img3 src={fishing}/>
                         </ImgContent>
                           
                         <ImgContent>
                              <Img3 src={eye}/>
                         </ImgContent>
                      </Position2>
                </CardImg>
                <CardBody>
                  <Titles>Chair</Titles>
                  <SubTitle>Minimal LCD chair</SubTitle>
                  <Star>
                     <Suma>$180 <Strike>$250</Strike></Suma>
                     <Imgs2 src={ratings}/>  
                  </Star>
                </CardBody>
                </Card>
 
                <Card>
                <CardImg>
                      <Img  src={rel3}/>
                      <Position  size>New</Position>
                      <Position2>
                         <ImgContent>
                               <Img3 src={heart}/>
                         </ImgContent>
                         
                         <ImgContent>
                               <Img3 src={nen}/>
                         </ImgContent>
                          
                         <ImgContent>
                               <Img3 src={fishing}/>
                         </ImgContent>
                           
                         <ImgContent>
                              <Img3 src={eye}/>
                         </ImgContent>
                      </Position2>
                </CardImg>
                <CardBody>
                  <Titles>Chair</Titles>
                  <SubTitle>Minimal LCD chair</SubTitle>
                  <Star>
                     <Suma>$180 <Strike>$250</Strike></Suma>
                     <Imgs2 src={ratings}/>  
                  </Star>
                </CardBody>
                </Card>
 
                <Card>
                <CardImg>
                      <Img  src={rel4}/>
                      <Position  size>New</Position>
                      <Position2>
                         <ImgContent>
                               <Img3 src={heart}/>
                         </ImgContent>
                         
                         <ImgContent>
                               <Img3 src={nen}/>
                         </ImgContent>
                          
                         <ImgContent>
                               <Img3 src={fishing}/>
                         </ImgContent>
                           
                         <ImgContent>
                              <Img3 src={eye}/>
                         </ImgContent>
                      </Position2>
                </CardImg>
                <CardBody>
                  <Titles>Chair</Titles>
                  <SubTitle>Minimal LCD chair</SubTitle>
                  <Star>
                     <Suma>$180 <Strike>$250</Strike></Suma>
                     <Imgs2 src={ratings}/>  
                  </Star>
                </CardBody>
               </Card>
 
               <Card>
               <CardImg>
                     <Img  src={rel5}/>
                     <Position  size>New</Position>
                     <Position2>
                        <ImgContent>
                              <Img3 src={heart}/>
                        </ImgContent>
                        
                        <ImgContent>
                              <Img3 src={nen}/>
                        </ImgContent>
                         
                        <ImgContent>
                              <Img3 src={fishing}/>
                        </ImgContent>
                          
                        <ImgContent>
                             <Img3 src={eye}/>
                        </ImgContent>
                     </Position2>
               </CardImg>
               <CardBody>
                 <Titles>Chair</Titles>
                 <SubTitle>Minimal LCD chair</SubTitle>
                 <Star>
                    <Suma>$180 <Strike>$250</Strike></Suma>
                    <Imgs2 src={ratings}/>  
                 </Star>
               </CardBody>
               </Card>
 
               <Card>
               <CardImg>
                     <Img  src={rel6}/>
                     <Position  size>New</Position>
                     <Position2>
                        <ImgContent>
                              <Img3 src={heart}/>
                        </ImgContent>
                        
                        <ImgContent>
                              <Img3 src={nen}/>
                        </ImgContent>
                         
                        <ImgContent>
                              <Img3 src={fishing}/>
                        </ImgContent>
                          
                        <ImgContent>
                             <Img3 src={eye}/>
                        </ImgContent>
                     </Position2>
               </CardImg>
               <CardBody>
                 <Titles>Chair</Titles>
                 <SubTitle>Minimal LCD chair</SubTitle>
                 <Star>
                    <Suma>$180 <Strike>$250</Strike></Suma>
                    <Imgs2 src={ratings}/>  
                 </Star>
               </CardBody>
              </Card>
                 
              <Card>
              <CardImg>
                    <Img  src={rel5}/>
                    <Position  size>New</Position>
                    <Position2>
                       <ImgContent>
                             <Img3 src={heart}/>
                       </ImgContent>
                       
                       <ImgContent>
                             <Img3 src={nen}/>
                       </ImgContent>
                        
                       <ImgContent>
                             <Img3 src={fishing}/>
                       </ImgContent>
                         
                       <ImgContent>
                            <Img3 src={eye}/>
                       </ImgContent>
                    </Position2>
              </CardImg>
              <CardBody>
                <Titles>Chair</Titles>
                <SubTitle>Minimal LCD chair</SubTitle>
                <Star>
                   <Suma>$180 <Strike>$250</Strike></Suma>
                   <Imgs2 src={ratings}/>  
                </Star>
              </CardBody>
              </Card>

              <Card>
              <CardImg>
                    <Img  src={rel6}/>
                    <Position  size>New</Position>
                    <Position2>
                       <ImgContent>
                             <Img3 src={heart}/>
                       </ImgContent>
                       
                       <ImgContent>
                             <Img3 src={nen}/>
                       </ImgContent>
                        
                       <ImgContent>
                             <Img3 src={fishing}/>
                       </ImgContent>
                         
                       <ImgContent>
                            <Img3 src={eye}/>
                       </ImgContent>
                    </Position2>
              </CardImg>
              <CardBody>
                <Titles>Chair</Titles>
                <SubTitle>Minimal LCD chair</SubTitle>
                <Star>
                   <Suma>$180 <Strike>$250</Strike></Suma>
                   <Imgs2 src={ratings}/>  
                </Star>
              </CardBody>
             </Card>

             <Card>
             <CardImg>
                   <Img  src={rel6}/>
                   <Position  size>New</Position>
                   <Position2>
                      <ImgContent>
                            <Img3 src={heart}/>
                      </ImgContent>
                      
                      <ImgContent>
                            <Img3 src={nen}/>
                      </ImgContent>
                       
                      <ImgContent>
                            <Img3 src={fishing}/>
                      </ImgContent>
                        
                      <ImgContent>
                           <Img3 src={eye}/>
                      </ImgContent>
                   </Position2>
             </CardImg>
             <CardBody>
               <Titles>Chair</Titles>
               <SubTitle>Minimal LCD chair</SubTitle>
               <Star>
                  <Suma>$180 <Strike>$250</Strike></Suma>
                  <Imgs2 src={ratings}/>  
               </Star>
             </CardBody>
            </Card>

            </Content>
            <Actives1>
               <Img5  src={Group}/>
               <Img6  src={Circle}/>
           </Actives1>
 
        </Container>
     )
}

export default Products
