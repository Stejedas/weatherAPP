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
            case 'Rain': updateFoodFiltered([...food.filter(i => i.suggestedWeather === 'rain')]);
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
    
    updateFoodRandom(Math.floor(Math.random()*foodFiltered.length))

   filterFoods(props.infoDays?.[0]?.weather[0].main)
   console.log(foodFiltered)

    return (<Col xl={4}>

        <Card style={{ width: '326px', height: '261px'}}>
            <Card.Body >
                <Card.Img variant="top " style={{ width: '326px', height: '194px'}} class="img-fluid" src={foodFiltered[FoodRandom].img} />
                <Card.Title className="fs-6">{foodFiltered[FoodRandom].name}</Card.Title>


            </Card.Body>
        </Card>
    </Col>)
}
export default FoodCard;
