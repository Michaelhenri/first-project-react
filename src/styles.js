import styled from 'styled-components'
import Backgound from './assets/background1.svg'

export const Container = styled.div`
    background: url("${Backgound}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;

`

export const Image = styled.img`
    margin-top: 30px;
    height: 150px;
`

export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 40px 40px 0px 0px;

    padding: 30px 16px;

    display: flex;
    flex-direction: column;

    height: 100vh;

`

export const H1 = styled.h1`
    color: #ffffff;
    font-size: 34px;
    font-weight: 700;
    line-height: 39.84px;
    text-align: center;
    margin-bottom: 40px;

`

export const InputLabel = styled.p`
    color: #eeeeee;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.41px;
    text-align: left;

    margin-left: 25px;

`

export const Input = styled.input`
    width: 328px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 24px;
    margin-left: 6px;
    border-radius: 14px 14px 14px 14px;
    border: none;
    outline: none;

    background: rgba(255, 255, 255, 0.25);

    box-shadow: 0px 4px 4px 0px #00000040;

    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: #ffffff;

`

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px 14px 14px 14px;
    border: none;

    background: rgba(0, 0, 0, 0.8);

    margin-top: 35px;

    font-size: 17px;
    font-weight: 700;
    line-height: 28px;
    color: #ffffff;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

`


export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    width: 328px;
    height: 58px;

    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
    color: #ffffff;

    border: none;
    outline: none;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 14px;

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 28px;

        color: #ffffff;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`