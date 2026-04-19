import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city ,setCity]=useState("");
    let [error,setError]=useState(false);

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0268f208f5a8b871b141594423ffbd04";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse=await response.json();
            //console.log(jsonResponse);
            let result={            
            city:jsonResponse.name,
            country:jsonResponse.sys.country,
            temp:jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            pressure:jsonResponse.main.pressure,
            weather:jsonResponse.weather[0].description,
            feelsLike:jsonResponse.main.feels_like,

        }
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    };


    let handleChange=(event)=>{
        setCity(event.target.value);
    };

    let handleSubmit=async(event)=>{
        try{
            event.preventDefault();
            //console.log(city);
            setCity("");
            let newInfo=await getWeatherInfo();
            updateInfo(newInfo);
        }catch(err){
            setError(true);
        }
    }
    return(
        <div className="SearchBox">
            <h2>Search for the Weather</h2>
            <form onSubmit={handleSubmit}>
                 <TextField
                  id="city" 
                  label="City Name" 
                  variant="outlined"
                  required value={city} 
                  onChange={handleChange}
                  />
                 <br></br><br></br>
                 <Button variant="contained" type="submit">Search</Button>

                 {error && <p style={{color:"red"}}>Error fetching weather data. Please try again.</p>}
            </form>
        </div>
    )
}