import styled from "styled-components";
export const Conatainer=styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
padding: 30px 0px 34px;
`

//logo tip qismi
export const Logotip=styled.div`
display: flex;
flex-direction: row;
align-items: center;
`
export const Logo=styled.img`
width: 31px;
height: 39px;
margin-right: 5.2px;
`

export const LogoTitle=styled.div`
font-family: Rubik;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 28px;
color: #555555;
`

//search qimi
export const Search=styled.div`
display: flex;
flex-direction:row;
align-items: center;
width: 582px;
height: 46px;
left: 402px;
top: 71px;
border: 2px solid #7AC751;
box-sizing: border-box;
border-radius: 8px;
`
export const Input=styled.input`
width: 403px;
height: 100%;
outline: none;
padding: 1px;
text-indent: 25px;
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #B0B0B0;
border: none;
border-right: 1.5px solid rgba(227, 227, 227, 0.78);
`
export const Select=styled.select`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #555555;
outline: none;
border: none;
width: 123px;
height: 100%;
padding: 10px;
`
export const SearchIcon=styled.div`
width: 55px;
height: 43px;
background: #7AC751;
border-radius: 0px 7px 6px 0px;
display: flex;
align-items: center;
justify-content: center;
`

export const Icons=styled.img`
width: 16px;
height: 16px;
`

//store 
export const Store=styled.div`
//border: 1px solid green;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const StoreIcon=styled.img`
width: 22px;
height: 22px;
margin: 0px 24px;
:nth-child(3){
    margin: 0px;
}
:nth-child(1){
    margin: 0px;
}
`