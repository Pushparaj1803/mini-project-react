import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";

export default function WeatherApp(){

    let [weatherInfo,setWeatherInfo]=useState({
        city:"Wonderland",
        feelsLike:24.84,
        temp:25.03,
        tempMin:25.67,
        tempMax:25.89,
        humidity:47,
        weather:"haze",

    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (

        <div style={{textAlign:"center"}}>
            <h1>Weather App by Deta</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>

    )
}