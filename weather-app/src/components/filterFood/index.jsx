import { useFood } from "../food-object/index.js";
import { useContext } from "react";
import { weatherContext } from "../context/context.jsx";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";



  

function FoodCard(props) {

    // revisar el xq me hace cuatro veces el useFood

    const { food, updateFood } = useFood([])

    const [lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse, foodFiltered, updateFoodFiltered] = useContext(weatherContext);
    console.log(`${props.infoDays?.[0]?.weather[0].main}`)
    // console.log(props.infoDays)


    function filterFoods() {
        switch (`${props.infoDays?.[0]?.weather[0].main}`) {
            case 'Clear sky': updateFood(food.filter(i => i.suggestedWeather === 'clear'));
                break;
            case 'Few clouds': updateFood(food.filter(i => i.suggestedWeather === 'clear'));
                break;
            case 'Shower rain': updateFood(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Thunderstorm': updateFood(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Rain': updateFood(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Clouds': updateFood(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            case 'Scattered clouds': updateFood(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            case 'Broken clouds': updateFood(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            case 'Snow': updateFood(food.filter(i => i.suggestedWeather === 'rain'));
                break;
            case 'Mist': updateFood(food.filter(i => i.suggestedWeather === 'cloud'));
                break;
            default:
                break;
        }
        
    }
    console.log(food)

    return (<Col xl={4}>
        <Card style={{ width: '326px', height: '261px'}}>
            <Card.Body >
                <Card.Img variant="top " style={{ width: '326px', height: '194px'}} class="img-fluid" src={food[Math.floor(Math.random()*16)].img} />
                <Card.Title className="fs-6">{food[2].name}</Card.Title>

            </Card.Body>
        </Card>
    </Col>)
}
export default FoodCard;
