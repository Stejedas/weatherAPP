import { useContext } from 'react';





export const getLatAndLonFromCity = async (citySearch) => {
    
<<<<<<< HEAD

    let key = 'da66c2d9d69cd9be8dc442074e110412';

   

=======
    let key = '4977422d264546168f4144a44e3181c3';
>>>>>>> f513647ea53ad13d693920d526681070655170f0

    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getWeatherByLocation = async (lat, lon, unit) => {

<<<<<<< HEAD


     let key = 'da66c2d9d69cd9be8dc442074e110412'; 




     
=======
     let key = '4977422d264546168f4144a44e3181c3'; 
>>>>>>> f513647ea53ad13d693920d526681070655170f0

    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    const d = await r.json()
    return d
}