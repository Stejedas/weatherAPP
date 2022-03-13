import { Button, Card, Col } from "react-bootstrap";
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiRainMix, WiNightSleet, WiStormShowers, WiSnowflakeCold, WiWindy, WiDayThunderstorm,WiThunderstorm,WiRain,WiCelsius,WiSunrise } from 'react-icons/wi'
import {BsSnow,BsClouds} from 'react-icons/bs'
import {IoIosSnow} from 'react-icons/io'
import Form from 'react-bootstrap/Form'
import './style.css'
import { Stack } from "react-bootstrap";





function FirstCard(props) {
  // console.log(props);


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
        return IoIosSnow  ();
        break;
      case "Mist":
        return WiWindy();
        break;
      case "Clouds":
          return WiCloud();
          break;
      case "Clear":
            return WiSunrise();
            break;

    }
  }
  

  const hadleChangeMethod = (e) => {
    if (props.upload.unitUse !== "imperial") {
      props.upload.updateUnitUse("imperial");
    } else {
      props.upload.updateUnitUse("metric");
    }
  };

  // console.log(props);
  return (
    <Col xl={3}>
      <Card className="p-3 mb-4 bg-white rounded" style={{ width: '326px', height: '231px'}} >
        <Card.Body>
          <Card.Title className="fs-5">Tiempo ahora</Card.Title>
          <Stack direction="horizontal">
          <Card.Text className="iconActual">
              {PrintWeather(props.infoDays?.[0]?.weather[0].main)}
            </Card.Text>
            <Card.Subtitle className="mb-2 fs-1">
              {`${parseInt(props.infoDays?.[0]?.temp.day)} º`}
            </Card.Subtitle>
          </Stack>
          <Stack direction="horizontal" className="d-flex justify-content-between" gap="5">
            <Card.Subtitle className="fs-5 pb-4">
              {`${props.infoDays?.[0]?.weather[0].main}`}
            </Card.Subtitle>
            <Button className="btn__f" onClick={hadleChangeMethod}>
            <Stack direction="horizontal" >
              <p className='cambiante'>ºF </p><p> / </p><p className="cambiante"> ºC</p>
              </Stack>
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FirstCard;