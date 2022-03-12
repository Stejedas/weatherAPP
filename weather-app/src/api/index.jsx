import { useContext } from 'react';



export const getLatAndLonFromCity = async (citySearch) => {
    
    let key = '4de41ab4e752d2e866ea9378e74f7faa'

    const r = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${key}`)
    const d = await r.json()
    return d
}

export const getWeatherByLocation = async (lat, lon, unit) => {


     let key = '4de41ab4e752d2e866ea9378e74f7faa' 


     

    const r = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${key}`)
    const d = await r.json()
    return d
}