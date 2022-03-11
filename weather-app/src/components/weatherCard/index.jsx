import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { useFood } from "../food-fetch/index.js";

import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import Stack from 'react-bootstrap/Stack'

import { useEffect, useContext,useState } from "react"
import { getLatAndLonFromCity, getWeatherByLocation } from "../../api/index.jsx";
import { weatherContext } from "../context/context.jsx";


import './style.css'
import CardSevenDays from "../CardSevenDays/index.js";

let arraynumber = [1, 2, 3, 4, 5, 6, 7];
let arrayd = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function WeatherCard() {


  // PARTE DE FETCH 
  const [lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse] = useContext(weatherContext);
  const {food, updateFood}=useFood([])
  console.log(food)

  useEffect(() => {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      let crd = pos.coords;

      updateLat(crd.latitude)
      updateLon(crd.longitude)
    };

    function error(err) {

      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

  }, [])

  const handleSearchCity = () => {

  }
  /*  
  useEffect(()=>{
    getLatAndLonFromCity('carcagente')
    .then(d => {
        updateLat(d.coord.lat)
        updateLon(d.coord.lon)
        console.log(d)
    })
  }, [])*/

  useEffect(() => {
    console.log(lon)
    console.log(lat)
    if (lon !== undefined && lat !== undefined) {
      getWeatherByLocation(lat, lon, unitUse)
        .then(d => {
          updatetWeather(d);


        })

    }
  }, [lat, lon, unitUse])


console.log(weather)
 

 

  return (
    <Container>
      <Row xs={12} xl={12}>
        <Stack direction="horizontal">

          <Col xl={4}>
            <Card>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4}>
            <Card>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={4}>
            <Card>
              <Card.Body>
              <Card.Img  variant="top " class="img-fluid" src={food[0].img} />
                <Card.Title>{food[0].name}</Card.Title>
              
              </Card.Body>
            </Card>
          </Col>

        </Stack>
      </Row>
      <Row>
        <Col xs={12}>
          {" "}
          // COMIENZA LAS CARD DIAS POSTERIORES
          <Stack
            direction="horizontal"
            className="d-flex justify-content-between"
          >
            {weather.daily?.map((c, i) => {
              if (i != 0) {
                return (
                  <Card key={c.dt} className="shadowCards">
                    <Card.Title className="title">{WriteDay(c.dt)}</Card.Title>
                    <div className="line"></div>
                    <Card.Text className="icon">
                      {PrintWeather(c.weather[0].main)}
                    </Card.Text>
                  </Card>
                );
              }
            })}
          </Stack>
        </Col>
      </Row>

    </Container>
  );
}
export default WeatherCard;
