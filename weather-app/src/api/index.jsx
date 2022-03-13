import { useContext } from 'react';
import { apikey } from '../api-key/key.js';




export const getLatAndLonFromCity = async (citySearch) => {
    
    let key = '4977422d264546168f4144a44e3181c3';

    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getWeatherByLocation = async (lat, lon, unit) => {

     let key = '4977422d264546168f4144a44e3181c3'; 

    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    const d = await r.json()
    return d
}