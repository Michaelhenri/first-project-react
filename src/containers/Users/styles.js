import styled from 'styled-components'
import Backgound from '../../assets/background.svg'

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
    height: 125px;
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