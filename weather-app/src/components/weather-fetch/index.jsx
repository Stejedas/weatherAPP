import { useEffect, useState } from "react"

function WeatherFetch(){
    const [weather,updatetWeather] = useState([])
//     const latFromLocal = localStorage.getItem('lon')
//    const lonFromLocal = localStorage.getItem('lat') 
   
   
     useEffect(() => {
       fetch('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=KEY')
         .then(j => j.json())
         .then(data => updatetWeather(data))
     }, [])
   
    return(
        <p>{JSON.stringify(weather)}</p>
    )
}
export default WeatherFetch;
