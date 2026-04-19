import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Sunny from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import './InfoBox.css';

export default function InfoBox({info}) {
    const INIT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670493556860-13e006e6faa4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1523772721666-22ad3c3b6f90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


    return(
    <div className="InfoBox">
        <h1>Weather Info-<i>{info.weather}</i></h1>
    <div className="card">
      <Card sx={{ maxWidth: 345 }}>
          <CardMedia
             sx={{ height: 200 }}
             image={
                info.humidity>80
                ?RAIN_URL
                :info.temp>15
                ?HOT_URL
                :COLD_URL
             }
             title="weather-photo"
           />
          <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                   {info.city}{
                    info.humidity>80
                    ?<ThunderstormIcon/>
                    :info.temp > 15
                    ?<Sunny/>
                    :<AcUnitIcon/>
                   }
              </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
              <div>Temperature: {info.temp}°C</div>
              <br></br>
              <div>Humidity: {info.humidity}%</div>
               <br></br>
              <div>Max Temperature: {info.tempMax}°C</div>
               <br></br>
              <div>Min Temperature: {info.tempMin}°C</div>
              <p>The weather can be described as {info.weather} and feels like {info.feelsLike}°C.</p>
            </Typography>
          </CardContent>
         </Card>
    </div>
    </div>
    )
}   