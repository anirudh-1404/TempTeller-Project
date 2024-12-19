import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    const [error, setError] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "18dd7123d2586e9f969c1809c94363b1";

    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        const result = {
            city: city,
            temp: jsonResponse.main.temp,
            temp_min: jsonResponse.main.temp_min,
            temp_max: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        } catch(e) {
            throw e;
        }
        
    }

    const handleInputChange = (event) => {
        setCity(event.target.name = event.target.value);
        // console.log(event.target.value);
    }

    const handleSubmit = async (evt) => {
        try {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo)
        } catch (err) {
            setError(true)
        }
        
    }

    return (
        <div className='searchBox'>
            <form action="" onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} 
            onChange={handleInputChange}/>
            <br />
            <br />
            <Button variant="contained" type='submit'>
            Search
            </Button>
            {
                error && <p style={{color: "red"}}>No such place exists!</p>
            }
            </form>
        </div>
    )
}