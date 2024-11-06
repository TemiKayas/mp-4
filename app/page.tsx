"use client";

import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";

const BigDiv = styled.div`
    background-color: dimgrey;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 50%;
    width: 60%;
    padding: 5% 0;
    margin-bottom: 10%;
    background-color: navajowhite;
    border: 0.3vw solid black;
    border-radius: 5vw;
`;

const StyledInput = styled.input`
    margin-top: 2vh;
    padding: 2vh 3vw;
    font-size: calc(8px + 2vh);
    color: black;
    background-color: white;
    border: 5px solid black;
    border-radius: 45px;
    outline: none;
    width: 60%;
    text-align: center;
`;

const StyledButton = styled(Link)`
    margin-top: 3vh;
    padding: 2vh 4vw;
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
`;

export default function Home() {
    const [city, setCity] = useState("");

    return (
        <BigDiv>
            <StyledDiv>
                <h1>Find the Weather in any City!</h1>
                <p>Enter a city name below to get the current weather</p>
                <StyledInput
                    type="text"
                    value={city}
                    placeholder="City name"
                    onChange={(e) => setCity(e.target.value)}
                />
                <StyledButton href={`/${city}`}>Get Weather</StyledButton>
            </StyledDiv>
        </BigDiv>
    );
}
