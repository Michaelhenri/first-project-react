import styled from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 74px;
    border-radius: 14px 14px 14px 14px;
    border: none;
    text-decoration: none;

    background: rgba(0, 0, 0, 0.8);

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

    ${ props => props.isBack && `
        border: 1px solid #ffffff;
        background: transparent;
        
        img {
        transform: rotateY(180deg);
        }
    `}

`