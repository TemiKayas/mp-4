import styled from "styled-components";
import {Weather} from "@/app/interfaces/weather";

const WeatherCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 3px solid deepskyblue;
    margin: 1% auto;
    width: 200px;
    border-radius: 10px;
`;

export default function WeatherCard(props:Weather){
    return (
        <WeatherCardWrapper className="weather-card">
            <h2>{props.datetime}</h2>
            <h3>{props.conditions}</h3>
            <h4>{props.description}</h4>
            <p>{props.tempmin}° - {props.tempmax}°</p>
        </WeatherCardWrapper>
    )
}