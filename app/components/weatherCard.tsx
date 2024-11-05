import styled from "styled-components";
import { Weather } from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2vh 1vw;
    margin: 1% auto;
    width: 90%;
    border-radius: 10px;
    transition: transform 0.3s ease, background-color 0.3s ease;

    &:hover {
        transform: scale(1.05); 
    }
`;

const DateTime = styled.h2`
    font-size: calc(5px + 2vh);
    margin: 0.5vh 0;
`;

const Conditions = styled.h3`
    font-size: calc(5px + 2vh);
    margin: 0.5vh 0;
`;

const Description = styled.h4`
    font-size: calc(6px + 1vh);
    margin: 0.5vh 0;
`;

const Temperature = styled.p`
    font-size: calc(8px + 2vh);
    margin: 0.5vh 0;
`;

export default function WeatherCard(props: Weather) {
    return (
        <WeatherCardWrapper className="weather-card">
            <DateTime>{props.datetime}</DateTime>
            <Conditions>{props.conditions}</Conditions>
            <Description>{props.description}</Description>
            <Temperature>{props.tempmin}° - {props.tempmax}°</Temperature>
        </WeatherCardWrapper>
    );
}
