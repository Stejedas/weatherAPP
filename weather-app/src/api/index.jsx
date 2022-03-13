import { useContext } from 'react';
import { apikey } from '../api-key/key.js';




export const getLatAndLonFromCity = async (citySearch) => {
    
    let key = 'bc8fe417d2c6bed6abdb9e3fd8863456';

    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getWeatherByLocation = async (lat, lon, unit) => {

     let key = 'bc8fe417d2c6bed6abdb9e3fd8863456'; 

    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    const d = await r.json()
    return d
}