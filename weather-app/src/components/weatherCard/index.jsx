import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import 'animate.css';

import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { BsGeoAltFill } from "react-icons/bs";
import Stack from 'react-bootstrap/Stack'

import { useEffect, useContext } from "react"
import { getLatAndLonFromCity, getWeatherByLocation } from "../../api/index.jsx";
import { weatherContext } from "../context/context.jsx";

let arraynumber = [1, 2, 3, 4, 5, 6, 7];
let arrayd = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function WeatherCard() {

  // PARTE DE FETCH 
  const [lat, updateLat, lon, updateLon, weather, updatetWeather, unitUse, updateUnitUse] = useContext(weatherContext);

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


  function WriteDay(day){
    const date = new Date((day) * 1000);
    const daydate = date.getDay()
    switch(daydate){
      case 0: return 'Domingo';
      break;
      case 1: return 'Lunes';
      break;
      case 2: return 'Martes';
      break;
      case 3: return 'Miercoles';
      break;
      case 4: return 'Jueves';
      break;
      case 5: return 'Viernes';
      break;
      case 6: return 'Sábado';
      break;
  }
  }

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action1">Home</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Buscar pais..."
                  BsGeoAltFill
                  className="me-2"
                  aria-label="Search"
                />

              </Form>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
      <Container>
        <Row xs={12}>
        <Stack direction="horizontal" >
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
          </Stack>
        </Row>
      </Container>
      <Row>
        <Col xs={12}> // COMIENZA LAS CARD DIAS POSTERIORES
          <Stack direction="horizontal" gap="5">
            { weather.daily?.map((c, i) => {
              if(i != 0){
              return (
                <Card>
                  <Card.Body>
                    <Card.Title>
              {WriteDay(c.dt)}
                    </Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              );
            }})}
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
export default WeatherCard;
