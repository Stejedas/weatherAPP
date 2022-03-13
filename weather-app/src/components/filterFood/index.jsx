import { useFood } from "../food-object/index.js";
import { useContext, useEffect, useState } from "react";
import { weatherContext } from "../context/context.jsx";
import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";


function FoodCard(props) {

    // revisar el xq me hace cuatro veces el useFood

    const { food, updateFood } = useFood([])
    // console.log(`${props.infoDays?.[0]?.weather[0].main}`)



    function writeCardFood(caseTW) {
        const foodClearFiltered = food.filter(i => i.suggestedWeather === 'clear');
        const foodRainFiltered = food.filter(i => i.suggestedWeather === 'rain');
        const foodCloudFiltered = food.filter(i => i.suggestedWeather === 'cloud')

        const clearRandom = Math.floor(Math.random() * foodClearFiltered.length)
        const rainRandom = Math.floor(Math.random() * foodRainFiltered.length)
        const cloudRandom = Math.floor(Math.random() * foodCloudFiltered.length)


        if (caseTW === 'Clear sky' || caseTW === 'Few clouds') {
            return (<Col xl={4}>

                <Card style={{ width: '326px', height: '261px' }}>
                    <Card.Body >
                        <Card.Img variant="top " style={{ width: '326px', height: '194px' }} class="img-fluid" src={foodClearFiltered[clearRandom].img} />
                        <Card.Title className="fs-6">{foodClearFiltered[clearRandom].name}</Card.Title>


                    </Card.Body>
                </Card>
            </Col>)

        } else if (caseTW === 'Shower rain' || caseTW === 'Thunderstorm' || caseTW === 'Rain' || caseTW === 'Snow') {
            return (<Col xl={4}>

                <Card style={{ width: '326px', height: '261px' }}>
                    <Card.Body >
                        <Card.Img variant="top " style={{ width: '326px', height: '194px' }} class="img-fluid" src={foodRainFiltered[rainRandom].img} />
                        <Card.Title className="fs-6">{foodRainFiltered[rainRandom].name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>)


        } else if (caseTW === 'Clouds' || caseTW === 'Scattered clouds' || caseTW === 'Broken clouds' || caseTW === 'Mist') {
            return (<Col xl={4}>

                <Card style={{ width: '326px', height: '261px' }}>
                    <Card.Body >
                        <Card.Img variant="top " style={{ width: '326px', height: '194px' }} class="img-fluid" src={foodCloudFiltered[cloudRandom].img} />
                        <Card.Title className="fs-6">{foodCloudFiltered[cloudRandom].name}</Card.Title>
                    </Card.Body>
                </Card>
            </Col>)


        }
    }
    return (
        <React.Fragment>
            { writeCardFood(props.infoDays?.[0]?.weather[0].main) 
            }
        </React.Fragment>
    )
}
export default FoodCard;