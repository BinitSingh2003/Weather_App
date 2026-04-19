import SearchBox  from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from 'react';

export default function WeatherApp(){
    const [weatherInfo , setWeatherInfo]=useState({
        city: "Shimla",
        country: "India",
        temp: 18,
        feelsLike: 16,
        humidity: 60,
        tempMax: 20,
        tempMin: 12,
        weather: "Cloudy",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}