import React from 'react'
import {FullContainer,Conatainer,Title,Rightlang ,Lagungage ,Sign,Line}  from './style'
const Baner = () => {
    return (
       <FullContainer>
            <Conatainer>
                   <Title>Welcome to our online shop</Title>
                    <Rightlang>
                        <Lagungage>English (USD)</Lagungage>
                        <Line/>
                        <Sign>Login or Sign up</Sign>
                    </Rightlang>
            </Conatainer>
       </FullContainer>
    )
}

export default Baner
