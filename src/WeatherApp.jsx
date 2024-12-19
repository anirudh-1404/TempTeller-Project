import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { Info } from "@mui/icons-material"
import { useState } from "react"

export default function WeatherApp () {

    const [weatherInfo, setWeatherInfo] = useState ({
        city: "Delhi",
        feelsLike: 10.48,
        tempMin: 11.05,
        tempMax: 11.05,
        temp: 11.05,
        humidity: 87,
        weather: "mist"
    })

    const updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h2 style={{color: "#1E90FF"}}>TempTeller</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}