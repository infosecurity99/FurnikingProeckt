import styled from "styled-components";
export const Container=styled.div`
display:flex;
`
export const Headers=styled.div`
width: 244px;
height: 67px;
background: #7AC751;
display: flex;
align-items: center;
justify-content: space-evenly;
`
export const Logo=styled.img`
height:14px;
width:18px;
`
export const Title=styled.div`
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;
letter-spacing: 0.02em;
color: #FFFFFF;
`
export const Navbar=styled.div`
display: flex;
align-items: center;
`
export const Ul=styled.ul`
display: flex;
align-items: center;
margin-left: 82px;
`
export const Li=styled.li`
list-style: none;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #555555;
margin-right: 65px;
cursor: pointer;
border: 1px solid transparent;
padding: 6px 15px;
:hover{
    padding: 6px 15px;
    border: 1px dotted green;
}
`