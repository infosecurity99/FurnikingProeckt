import styled from "styled-components";

export const Container=styled.div`
margin-top: 120px;
margin-bottom: 110px;
`
export const Title=styled.div`
font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 45px;
color: #555555;
text-align:center;
`
export const Ul=styled.div`
margin-top: 45px;
margin-bottom: 73px;
display: flex;
justify-content: center;
`

export const Li=styled.div`
font-family: Mulish;
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 30px;
color: #C2C2C2;
margin-left: 90px;
transition: all 0.6s ease-in;
:hover{
    color: #7AC751;
    cursor: pointer;
    transition: all 0.6s ease-in;
}
`
export const Content=styled.div`
width: 100%;
height: 1300px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`
export const Card=styled.div`
width: 368.03px;
margin-bottom: 38px;
`
export const CardImg=styled.div`
width: 368.03px;
height: 287.82px;
position: relative;
:hover{
   opacity: 0.9;
}
`
export const Img=styled.img`
width: 100%;
height: 100%;
`
export const CardBody=styled.div`
`
export const Titles=styled.div`
font-family: Mulish;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 130%;
letter-spacing: 0.008em;
text-transform: uppercase;
color: rgba(117, 117, 117, 0.71);
margin-top: 15px;
`
export const SubTitle=styled.div`
font-family: Rubik;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 120%;
letter-spacing: 0.005em;
color: #555555;
margin: 8px 0px 9px 0px;
`
export const Star=styled.div`
margin-bottom: 3px;
display: flex;
align-items: center;
justify-content: space-between;
`
export const Suma=styled.div`
font-family: Mulish;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 120%;
text-align: center;
letter-spacing: 0.005em;
color: #7AC751;
display: flex;
`
export const Strike=styled.div`
font-family: Mulish;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 120%;
text-align: center;
letter-spacing: 0.005em;
text-decoration-line: line-through;
color: #CCCCCC;
margin-left: 10px;
`
export const Imgs2=styled.img`
width: 66.53px;
height: 9.58px;
`
export const Position=styled.div`
position: absolute;
width: 50.68px;
height: 27.42px;
background:${props => props.size?  "#00B7F1" : 'green'};
border-radius: 0px 0px 5px 0px;
top: 0%;
left: 0%;
font-family: Mulish;
font-style: normal;
font-weight: 600;
font-size: 16px;
text-align: center;
letter-spacing: 0.008em;
color: #FFFFFF;
padding: 5px 7px;
`
export const Position2=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
height: 104px;
position: absolute;
bottom: 45%;
right: 1%;
flex-direction: column;
`
export const Img3=styled.img`
height: 18px;
width: 18px;
border-radius: 50%;
z-index:1;
background-size: cover;
background-position:center center;
`
export const ImgContent=styled.div`
margin-top: 12px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 10px;
background-color: white;
border-radius: 50%;
`
export const Actives1=styled.div`
text-align:center;
margin-top: 80px;
`

export const Img5=styled.img`
margin-right: 14px;
`

export const Img6=styled.img`
`