import { useEffect, useState } from "react"

function WeatherFetch(){
    const [weather,updatetWeather] = useState([])
//     const latFromLocal = localStorage.getItem('lon')
//    const lonFromLocal = localStorage.getItem('lat') 
   
   
     useEffect(() => {
       fetch('https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=e659f9e2b322c20d032f79bdcd034fa4')
         .then(j => j.json())
         .then(data => updatetWeather(data))
     }, [])
   
    return(
        <p>{JSON.stringify(weather)}</p>
    )
}
export default WeatherFetch;
