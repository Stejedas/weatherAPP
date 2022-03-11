import { useEffect, useContext } from "react"
import { weatherContext } from "../context/context.jsx";

function WeatherFetch() {
    const [lat, updateLat, lon, updateLon, weather, updatetWeather,weatherForecast, updateWeatherForecast] = useContext(weatherContext);

     let key = '1f7689b2591acb5efd5d91b7e124bf44'
    


    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${key}`)
            .then(j => j.json())
            .then(data => {
                updatetWeather(data)
                console.log(data)

                updateLat(data.coord.lat)
                updateLon(data.coord.lon)
                // console.log(lon)

            })

    }, [])


    useEffect(()=>{
        console.log(lat)
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${40.416775}&lon=${-3.703790}&units=metric&appid=${key}`)
            .then(j=>j.json())
            .then(data=>{
                updateWeatherForecast(data)
                 console.log(data)

            })


    },[])


    


    return (
        <p>hola</p>
    )
}
export default WeatherFetch;
