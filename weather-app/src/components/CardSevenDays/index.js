import { Container, Row, Col, Stack, Card } from 'react-bootstrap'
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiRainMix, WiNightSleet, WiStormShowers, WiSnowflakeCold, WiWindy } from 'react-icons/wi'


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
            case 'Clear sky': return WiDaySunny();
                break;
            case 'Few clouds': return WiDayCloudy();
                break;
            case 'Scattered clouds': return WiCloud();
                break;
            case 'Broken clouds': return WiCloudy();
                break;
            case 'Shower rain': return WiRainMix();
                break;
            case 'Rain': return WiNightSleet();
                break;
            case 'Thunderstorm': return WiStormShowers();
                break;
            case 'Snow': return WiSnowflakeCold();
                break;
            case 'Mist': return WiWindy();
                break;
        }
    }
    // console.log(laterDays.infoDays)
    return (
        <Container>
            <Row>
                <Col xs={12} > // COMIENZA LAS CARD DIAS POSTERIORES
                    <Stack direction="horizontal" className="d-flex justify-content-between" >
                    {laterDays.infoDays?.map((c, i) => {
                            if (i != 0) {
                                return (
                                    <Card key={c.dt} className='shadowCards'>

                                        <Card.Title className="title" >
                                            {WriteDay(c.dt)}
                                        </Card.Title>
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
    )

} 

export default CardSevenDays;
