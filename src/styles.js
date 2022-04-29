import { createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

const scaleStretch = 1.2;
const mediaWidth = '700px'

export const Global = createGlobalStyle`

    body{
        background-color: #6BEFA3;
        font-family: 'Montserrat', sans-serif;
        margin: 0px;
        border: 0px;
        padding: 0px;  
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
        overflow-x: hidden;
        height: calc(100vh+'60px');    
        width: max-content;
        padding-top: 60px;
    }
`
export const HalfA = styled.section`
    padding: 100px 100px 100px 100px ;
    height: 100vh;
    width: 24vw;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    @media(max-width:${mediaWidth}){
        padding: 0px 0px 0px 0px ;
        align-items: center;
        width: 100vw;
        height: 40vh;
    }
    >div{
        >select{
        -webkit-appearance: none;
        -moz-appearance: none;
        width: 200px;
        padding: 14px 20px  ;
        margin-right: -26px;
        border-radius: 10px;
        border-style: hidden;
        background-color: #FFFFFF;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 0.10em;
        font-weight: 500;
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
            left: -10px;
            top: 16px;
            width: 60px; 
            height: 60px;
            content: '';
            @media(max-width:${mediaWidth}){
                display: block;
                top: 0px;
                left: calc(50% - 30px);
            }
        }
    }
    >footer{
        font-size: 20px;
        font-weight: 600;
        color: #FFFFFF;
        @media(max-width:${mediaWidth}){
            font-weight: 400;
            font-size: 16px;
            letter-spacing: 0.12em;
        }

        &::before{
            content: 'concurso';
            font-weight: 400;
            letter-spacing: 0.12em;
            display: block;
            position: relative;
            bottom: 10px;
            @media(max-width:${mediaWidth}){
                display: inline;
                font-size: 16px;
                content: 'concurso nº ';
                bottom: 0;
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
    padding: 100px 100px 100px 100px;
    height: 100vh;
    width: 76vw;
    border-radius: 30%/100vh 0 0 100vh;
    transform: scaleY(${scaleStretch});
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #EFEFEF;
    @media(max-width:${mediaWidth}){
        border-radius: 50%/100px 100px 0 0;
        padding: 0 0;
        align-items: center;
        width: 100vw;
        height: 60vh;
        transform: scaleY(calc(1/${scaleStretch})) scaleX(${scaleStretch});
      
    }

    >footer{
        align-self: center;
        padding-bottom: 0px;
        transform: scaleY(calc(1/${scaleStretch}));
        position: relative;
        bottom: calc(${(scaleStretch-1)/2}* 100vh );
        @media(max-width:${mediaWidth}){
            transform: scaleX(calc(1/${scaleStretch})) scaleY(${scaleStretch});
            width:60%;
            font-size: 12px;
        }
    }
    >ul{
        list-style-type: none;
        margin:0;
        padding: 0;
        text-indent: 0;
        display: flex;
        align-self: center;
        flex-direction: row;
        justify-content: center;
        gap: 40px;
        flex-wrap: wrap;
        transform: scaleY(calc(1/${scaleStretch}));
        @media(max-width:${mediaWidth}){
                transform: scaleX(calc(1/${scaleStretch})) scaleY(${scaleStretch});
                gap: 20px;
                width:70%;
                margin-bottom: 20px;
            }
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
            @media(max-width:${mediaWidth}){
                height: 60px;
                width: 60px;
                font-size: 16px;
            }
        }   
    }
`
