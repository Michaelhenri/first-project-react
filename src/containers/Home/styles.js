import styled from 'styled-components'
import Backgound from '../../assets/background1.svg'

export const Container = styled.div`
    background: url("${Backgound}");
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;

`

export const Image = styled.img`
    margin-top: 30px;
    height: 150px;
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

export const ButtonUsers = styled.button`

width: 342px;
    height: 74px;
    border-radius: 14px 14px 14px 14px;
    border: 1px solid #ffffff;
    text-decoration: none;

    background: transparent;

    margin-top: 30px;

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