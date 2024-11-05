"use client";

import styled from 'styled-components';
import Link from 'next/link';

const MyDiv = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export default function Header(){
    return (
        <MyDiv>
            <h1>My Super Cool Weather</h1>
            <Link href='/'>Back To Home</Link>
        </MyDiv>
    );
}