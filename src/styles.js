import { createGlobalStyle} from 'styled-components';
import styled from 'styled-components';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons'

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
    height: 100vh;
`
export const HalfA = styled.section`
    background-color: #6BEFA3;
    padding: 100px 0px 100px 100px ;
    height: 100%;
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
    border-radius:10% 0% 0% 10% / 50% 50% 50% 50%;
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
