"use client"
import styled from 'styled-components';

const MyDiv = styled.div `
    height: 5vh;
    width: 100%;
    margin: 0 auto;
    background-color: dimgrey;
`
const MyH4 = styled.h4`
    text-align: center;
    color: navajowhite;
    font-size: calc(8px + 2vh);
`

export default function Footer() {
    return(
        <MyDiv>
            <MyH4>All rights reserved to Artemios Kayas {'\u00A9'}</MyH4>
        </MyDiv>
    );
}