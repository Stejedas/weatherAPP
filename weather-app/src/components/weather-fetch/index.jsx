import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { useEffect, useContext } from "react"
import { useBootstrapBreakpoints } from "react-bootstrap/esm/ThemeProvider";
import { getLatAndLonFromCity, getWeatherByLocation } from "../../api/index.jsx";
import { weatherContext } from "../context/context.jsx";



function WeatherFetch() {
<<<<<<< HEAD
    const [lat, updateLat, lon, updateLon, weather, updatetWeather,weatherForecast, updateWeatherForecast] = useContext(weatherContext);

     let key = ''
    


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
=======
>>>>>>> ffcf365e173d1896ad17cc531fdd0c35eee153ee

    const [lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse] = useContext(weatherContext);

    useEffect(()=>{
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      
      function success(pos) {
        let crd = pos.coords;

        updateLat(crd.latitude)
        updateLon(crd.longitude)
      };
      
      function error(err) {
        
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      
      navigator.geolocation.getCurrentPosition(success, error, options);
    
    }, [])
    
    const handleSearchCity = () => {

    }
  /*  
  useEffect(()=>{
    getLatAndLonFromCity('carcagente')
    .then(d => {
        updateLat(d.coord.lat)
        updateLon(d.coord.lon)
        console.log(d)
    })
  }, [])*/

    useEffect(() => {
       console.log(lon)
       console.log(lat)
    if(lon !== undefined && lat !== undefined){
        getWeatherByLocation(lat, lon, unitUse)
        .then(d => {
            updatetWeather(d);    
           
           
        })
        
    }
    }, [lat,lon, unitUse])
    
    console.log(lat)
    console.log(lon)
    console.log(weather)

    return (
        <p>hola</p>
    )
}
export default WeatherFetch;
