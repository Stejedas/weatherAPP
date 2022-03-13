import { Container, Row, Col, Stack, Card } from 'react-bootstrap'
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiRainMix, WiNightSleet, WiStormShowers, WiSnowflakeCold, WiWindy, WiDayThunderstorm,WiThunderstorm,WiRain } from 'react-icons/wi'
import {BsClouds} from 'react-icons/bs'
import {IoIosSnow} from 'react-icons/io'
import './style.css'

function CardSevenDays(laterDays) {

   
    
    function WriteDay(day) {
        const date = new Date((day) * 1000);
        const daydate = date.getDay()
        switch (daydate) {
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

    function PrintWeather(typeWeahter) {
        switch (typeWeahter) {
          case "Clear sky":
            return WiDaySunny();
            break;
          case "Few clouds":
            return WiDayCloudy();
            break;
            case "Scattered clouds":
                return BsClouds();
                break;
          case "Broken clouds":
            return WiCloudy();
            break;
          case "Shower rain":
            return WiRainMix();
            break;
          case "Rain":
            return WiRain();
            break;
          case "Thunderstorm":
            return WiThunderstorm();
            break;
          case "Snow":
            return IoIosSnow();
            break;
          case "Mist":
            return WiWindy();
            break;
          case "Clouds":
              return WiCloud();
              break;
        }
      }
    // console.log(laterDays.infoDays)
    return (
        <Container>
            <Row>
                <Col xs={12}> 
                    <Stack direction="horizontal" className="d-flex justify-content-between" >
                    {laterDays.infoDays?.map((c, i) => {
                            if (i != 0) {
                                return (
                                    <Card key={c.dt} style={{ width: '115px', height: '160px'}} className='shadowCards p-2'>

                                        <Card.Title className="titleSevenCards text-center" style={{ width: '100%'}}>
                                            {WriteDay(c.dt)}
                                        </Card.Title>
                                        <div className="border border-1 lineSevenCards" ></div>
                                        <Card.Body className="iconSevenCards text-center p-0" style={{ width: '100%'}}>
                                            {PrintWeather(c.weather[0].main)}
                                        </Card.Body>

                                    </Card>
                                );
                            }
                        })}
                    </Stack>
                </Col>
            </Row>
        </Container>
    )

} 

export default CardSevenDays;
