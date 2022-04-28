import { createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

const colorPallete = {'mega-sena':'#6BEFA3', 'quina':'#F3F3F3'}

export const Global = createGlobalStyle`

    body{
        background-color: #EFEFEF;
        font-family: 'Montserrat', sans-serif;
        margin: 0px;
        border: 0px;
        padding: 0px;  
    }
`
export const Container = styled.main`
    display:flex;
    flex-direction: row;
    max-height: calc(100vh + 200px);
    height: max-content;
    overflow-y: hidden;
`
export const HalfA = styled.section`
    background-color: ${({bg})=>colorPallete.bg||'#6BEFA3'};
    padding: 100px 0px 100px 100px ;
    height: 100vh;
    width: 40vw;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    >div{
        >select{
        -webkit-appearance: none;
        -moz-appearance: none;
        width: max-content;
        padding: 14px 21px  ;
        background-color: #FFFFFF;
        text-transform: uppercase;
        border-radius: 5px;
        border-style: hidden;
        font-size: 14px;
        font-weight: 500;
        margin-right: -25px;
        cursor: pointer;
        }
    }
    >h1{
        font-size: 32px;
        color: #FFFFFF;
        &::before{
            background-image: url('logocaixa.png');
            background-size: 60px 60px;
            background-position: center;
            display: inline-block;
            position: relative;
            left: -10 px;
            top: 15px;
            width: 60px; 
            height: 60px;
            content: '';
        }
    }
    >footer{
        font-size: 20px;
        font-weight: 600;
        color: #FFFFFF;
        &::before{
            content: 'concurso';
            font-weight: 400;
            display: block;
            position: relative;
            bottom: 10px; 
        }
    }
`
export const HalfB = styled.section`
    padding: 100px 100px 100px 100px ;
    height: 100vh;
    width: 60vw;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #EFEFEF;

    >footer{
        align-self: center;
    }
    >ul{
        margin:0;
        padding: 0;
        text-indent: 0;
        list-style-type: 0;
        display: flex;
        align-self: center;
        flex-direction: row;
        column-gap: 40px;
        row-gap: 40px   ;
        flex-wrap: wrap;
        list-style-type: none;
        >li{
            height: 100px;
            width: 100px;
            border-radius:50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:#FFFFFF;
            font-size: 24px;
            font-weight: 600;
        }   
    }
`
export const Division = styled.section`
    background-color: #EFEFEF;
    height: 100vh;
    max-height: 100vh;
    width: 10vh;
    position: relative;
    right: 5vh;
    padding: 100px 0px 100px 0px;
    border-radius: 50%/100vh 0 0 100vh;
    transform: scaleY(1.1) scaleX(4);
    overflow-y: hidden;
`
