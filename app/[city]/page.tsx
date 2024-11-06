"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";
import WeatherCard from "@/app/components/weatherCard";
import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";
import Link from "next/link";

const WeatherContentWrapper = styled.main`
    width: 100vw;
    height: 100vh;
    margin: auto;
    padding: 3% 0;
    background-color: dimgrey;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
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

const CityName = styled.h1`
    color: navajowhite;
    font-size: 3vh;
    text-align: center;
    margin-bottom: 3vh;
`;

const WeatherCardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`;

const WeatherBubble = styled.div`
    background-color: navajowhite;
    border: 0.3vw solid black;
    border-radius: 5vw;
    padding: 2vh 2vw;
    width: 20vw;
    margin: 1%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function CityPage() {
    const params = useParams();

    const { data, error } = useSWR(`/api/getWeatherData?city=${params.city}`, (url) =>
        fetch(url).then((res) => res.json())
    );

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const days = data?.days || [];

    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <MyLink href='/'>Back To Home</MyLink>
            <WeatherCardsContainer>
                {days.map((weather: Weather, i: number) => (
                    <WeatherBubble key={i}>
                        <WeatherCard
                            datetime={weather.datetime}
                            conditions={weather.conditions}
                            description={weather.description}
                            tempmin={weather.tempmin}
                            tempmax={weather.tempmax}
                        />
                    </WeatherBubble>
                ))}
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    );
}
