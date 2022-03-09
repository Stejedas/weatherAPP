import { useEffect, useState } from "react"

function WeatherFetch(){

    const [data, updateData]=useState([])

    useEffect(() => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e659f9e2b322c20d032f79bdcd034fa4')
        .then (j => j.json())
        .then (data =>updateData(data))
    }, [])
    // console.log(data)

    return(
        <p>{JSON.stringify(data)}</p>
    )
}
export default WeatherFetch;
