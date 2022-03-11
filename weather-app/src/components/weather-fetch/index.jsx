import { useEffect, useContext } from "react"
import { getLatAndLonFromCity, getWeatherByLocation } from "../../api/index.jsx";
import { weatherContext } from "../context/context.jsx";


function WeatherFetch() {

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
            const date = new Date((d.current.dt+240000) * 1000);
            const objdate = date.getDay()
            console.log(objdate)
            console.log(date)
           
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
