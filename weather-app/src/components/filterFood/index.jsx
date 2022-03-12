import { useFood } from "../food-object/index.js";
import { useContext } from "react";
import { weatherContext } from "../context/context.jsx";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";





function FoodCard(props) {

    const { food, updateFood } = useFood([])

    const [lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse, foodFiltered, updateFoodFiltered] = useContext(weatherContext);
    console.log(`${props.infoDays?.[0]?.weather[0].main}`)
    console.log(props.infoDays)


    function filterFoods() {
        switch (`${props.infoDays?.[0]?.weather[0].main}`) {
            case 'clear': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'clear'))

                break;
            case 'rain': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'rain'))

                break;
            case 'clouds': updateFoodFiltered(food.filter(i => i.suggestedWeather === 'cloud'))

                break;

            default:
                break;
        }
    }
    console.log(foodFiltered)

    return (<Col xl={4}>
        <Card>
            <Card.Body >
                <Card.Img variant="top " class="img-fluid" src={food[2].img} />
                <Card.Title>{food[2].name}</Card.Title>

            </Card.Body>
        </Card>
    </Col>)
}
export default FoodCard;
