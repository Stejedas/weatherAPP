import { useFood } from "../food-object/index.js";
import { useContext, useEffect, useState } from "react";
import { weatherContext } from "../context/context.jsx";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function FoodCard(props) {

    // revisar el xq me hace cuatro veces el useFood

    const { food, updateFood } = useFood([])
    const [FoodRandom, updateFoodRandom]=useState('')
    const [lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse, foodFiltered, updateFoodFiltered] = useContext(weatherContext);
    // console.log(`${props.infoDays?.[0]?.weather[0].main}`)
    
    
    
/*
    function filterFoods(wt) {
        // console.log(food[0].suggestedWeather)
        switch (wt) {
            case 'Clear sky': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'clear'));
                break;
            case 'Few clouds': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'clear'));
                break;
            case 'Shower rain': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Thunderstorm': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Rain': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Clouds': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            case 'Scattered clouds': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            case 'Broken clouds': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            case 'Snow': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Mist': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            default:
                break;
        }
        
    }

    updateFoodFiltered(food.filter(i => i.suggestedWeather === 'clear'))
    console.log (foodFiltered)
    console.log(`${props.infoDays?.[0]?.weather[0].main}`)
    
    updateFoodRandom(Math.floor(Math.random()*foodFiltered.length))

   filterFoods(props.infoDays?.[0]?.weather[0].main)
    */

    return (<Col xl={3}>

        <Card style={{ width: '326px', height: '261px'}}>
            
        </Card>
    </Col>)
}
export default FoodCard;
