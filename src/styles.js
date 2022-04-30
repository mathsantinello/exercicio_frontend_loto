import { createGlobalStyle} from 'styled-components';
import styled, {keyframes} from 'styled-components';

const scaleStretch = 1.2;
const mediaWidth = '800px';
const logoChangeWidth ='1000px';

const loadingAnimation =keyframes`
  0%, 100% {
    box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.5), -1.8em -1.8em 0 0em rgba(0,0,0, 0.7);
  }
  12.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.5);
  }
  25% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.5), 1.8em -1.8em 0 0em rgba(0,0,0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  37.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.5), 2.5em 0em 0 0em rgba(0,0,0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  50% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.5), 1.75em 1.75em 0 0em rgba(0,0,0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0,0,0, 0.2), -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  62.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.5), 0em 2.5em 0 0em rgba(0,0,0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0,0,0, 0.2), -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  75% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.5), -1.8em 1.8em 0 0em rgba(0,0,0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0,0,0, 0.2);
  }
  87.5% {
    box-shadow: 0em -2.6em 0em 0em rgba(0,0,0, 0.2), 1.8em -1.8em 0 0em rgba(0,0,0, 0.2), 2.5em 0em 0 0em rgba(0,0,0, 0.2), 1.75em 1.75em 0 0em rgba(0,0,0, 0.2), 0em 2.5em 0 0em rgba(0,0,0, 0.2), -1.8em 1.8em 0 0em rgba(0,0,0, 0.5), -2.6em 0em 0 0em rgba(0,0,0, 0.7), -1.8em -1.8em 0 0em #000000;
  }
`
export const Global = createGlobalStyle`
    body{
        font-family: 'Montserrat', sans-serif;
        margin: 0px;
        border: 0px;
        padding: 0px;
        outline: 0px;
        @media(max-width: ${mediaWidth}){
            margin: 0px;
            border: 0px;
            padding: 0px;
        }
    }
`
export const Container = styled.main`
    display:flex;
    flex-direction: row;
    height: max-content;
    overflow-y: hidden;
    background-color:${props=>props.bg?props.bg:'#6BEFA3'} ;
    transition: background-color 0.5s ease;
    @media(max-width:${mediaWidth}){
        flex-direction: column;
        height: max-content;
        width: max-content;
        overflow-x: hidden;
        overflow-y: visible;
    }
`
export const HalfA = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    width: 24vw;
    padding: 100px 3vw 100px 3vw ;
    @media(max-width:${mediaWidth}){
        align-items: center;
        height:40vh;
        width: 100vw;
        padding: 5vh 0px 5vh 0px;
    }
    >div{
        >select{
        -webkit-appearance: none;
        -moz-appearance: none;
        background-color: #FFFFFF;
        width: 200px;
        padding: 14px 20px  ;
        margin-right: -26px;
        border-radius: 10px;
        border-style: hidden;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.10em;
        text-transform: uppercase;
        cursor: pointer;
        }
    }
    >h1{
        color: #FFFFFF;
        font-size: 32px;
        &::before{
            background-image: url('logocaixa.png');
            background-size: 60px 60px;
            background-position: center;
            display: inline-block;
            position: relative;
            left: -10px;
            top: 16px;
            height: 60px;
            width: 60px; 
            content: '';
            @media(max-width:${logoChangeWidth}){
                display: block;
                top: 0;
                align-self: center;
                left: calc(50% - 30px);
            }
        }
    }
    >footer{
        color: #FFFFFF;
        font-size: 20px;
        font-weight: 600;
        @media(max-width:${mediaWidth}){
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.12em;
        }
        &::before{
            display: block;
            position: relative;
            bottom: 10px;
            font-weight: 400;
            letter-spacing: 0.12em;
            content: 'concurso';
            @media(max-width:${mediaWidth}){
                display: inline;
                bottom: 0;
                font-size: 16px;
                content: 'concurso nº ';
            }
        }
        &::after{
            content:' - 07/04/2020';
            @media(max-width:${mediaWidth}){
                display: none;
            }
        }
    }
`
export const HalfB = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #EFEFEF;
    height: 100vh;
    width: 64vw;
    padding: 100px 3vw 100px 3vw;
    border-radius: 30%/100vh 0 0 100vh;
    transform: scaleY(${scaleStretch});
    @media(max-width:${mediaWidth}){
        align-items: center;
        height: 40vh;
        width: 100vw;
        padding: 5vh 0px 5vh 0px;
        border-radius: 50%/100px 100px 0 0;
        transform: scaleY(1) scaleX(${scaleStretch});
    }
    >footer{
        align-self: center;
        position: relative;
        text-align: center;
        bottom: calc(${(scaleStretch-1)/2}* 100vh );
        transform: scaleY(calc(1/${scaleStretch}));
        @media(max-width:${mediaWidth}){
            bottom: 0;
            width:60%;
            font-size: 12px;
            transform: scaleX(calc(1/${scaleStretch})) scaleY(1);
        }
    }
    >ul{
        list-style-type: none;
        text-indent: 0;
        display: flex;
        align-self: center;
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
        margin:0;
        padding: 0;
        transform: scaleY(calc(1/${scaleStretch}));
        @media(max-width:${mediaWidth}){
                column-gap: 16px;
                row-gap: 10px;
                width:70%;
                transform: scaleX(calc(1/${scaleStretch})) scaleY(1);
            }
        >li{
            display: flex;
            align-items: center;
            justify-content: center;
            background-color:#FFFFFF;
            height: 100px;
            width: 100px;
            border-radius:50%;
            font-size: 24px;
            font-weight: 600;
            @media(max-width:${mediaWidth}){
                height: 64px;
                width: 64px;
                font-size: 16px;
            }
        }
        >div{
            margin: 100px auto;
            font-size: 25px;
            width: 1em;
            height: 1em;
            border-radius: 50%;
            position: relative;
            text-indent: -9999em;
            animation-name: ${loadingAnimation};
            animation-duration:1.1s;
            animation-timing-function: ease;
            animation-iteration-count: infinite;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
        }
    }
`