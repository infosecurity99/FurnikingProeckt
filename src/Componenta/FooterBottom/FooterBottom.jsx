import React from 'react'
import {Container,Left ,Right} from './style'
const FooterBottom = () => {
    return (
        <Container>
             <Left>
                  <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/">© 2021 Funking - All rights reserved.</a>
             </Left>

             <Right>
                    <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/"  style={{margin:'26px'}}>Privacy</a>
                    <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/" style={{margin:'26px'}}>Security</a>
                    <a  href="https://www.linkedin.com/in/zarif-jorayev-a3250b228/" style={{margin:'26px'}}>Terms</a>
             </Right>
        </Container>
    )
}

export default FooterBottom
