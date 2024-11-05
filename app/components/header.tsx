"use client";

import styled from 'styled-components';
import Link from 'next/link';

const MyDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5vh;
    padding: 2% 0 2% 0;
    align-items: center;
    justify-content: center;
    background-color: navajowhite;
    h1 {
        font-size: calc(10px + 2vh);
        margin: 0 3%;
    }
`

const MyLink = styled(Link)`
    padding: 1%;
    font-size: calc(5px + 2vh);
    color: white;
    background-color: darkblue;
    border: none;
    border-radius: 5vw;
    text-decoration: none;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: royalblue;
    }
`

export default function Header(){
    return (
        <MyDiv>
            <h1>Super Cool Weather</h1>
            <MyLink href='/'>Back To Home</MyLink>
        </MyDiv>
    );
}