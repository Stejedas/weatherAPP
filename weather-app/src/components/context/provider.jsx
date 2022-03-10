import { useState } from "react";
import { weatherContext } from "../context/context.jsx";

function WeatherContexProvider({children}){

    const [lat,updateLat]=useState()
    const [lon,updateLon]=useState()
    const [weather,updatetWeather] = useState([])
    const [weatherForecast, updateWeatherForecast]= useState([])


    return(
        <weatherContext.Provider value={[lat,updateLat,lon,updateLon,weather,updatetWeather,weatherForecast, updateWeatherForecast]}>{children}</weatherContext.Provider>
    )
}
export default WeatherContexProvider;