import { Button, Card, Col } from "react-bootstrap";
import { WiDaySunny, WiDayCloudy, WiCloud, WiCloudy, WiRainMix, WiNightSleet, WiStormShowers, WiSnowflakeCold, WiWindy } from 'react-icons/wi'
import Form from 'react-bootstrap/Form'




function FirstCard(props) {


  function PrintWeather(typeWeahter) {
    switch (typeWeahter) {
      case "Clear sky":
        return WiDaySunny();
        break;
      case "Few clouds":
        return WiDayCloudy();
        break;
      case "Scattered clouds":
        return WiCloud();
        break;
      case "Broken clouds":
        return WiCloudy();
        break;
      case "Shower rain":
        return WiRainMix();
        break;
      case "Rain":
        return WiNightSleet();
        break;
      case "Thunderstorm":
        return WiStormShowers();
        break;
      case "Snow":
        return WiSnowflakeCold();
        break;
      case "Mist":
        return WiWindy();
        break;

    }
  }

  console.log(props);
  return (
    <Col xl={4}>
      <Card className="shadow p-3 mb-4 bg-white rounded">
        <Card.Body>
          <Card.Title>Tiempo Actual:</Card.Title>
          <Card.Subtitle className="mb-2 fs-1">
            {`${props.infoDays?.[0]?.temp.day}`}
          </Card.Subtitle>
          <Card.Text className="icon">
            {PrintWeather(props.infoDays?.[0]?.weather[0].main)}
          </Card.Text>
          <Card.Subtitle className="fs-5">
            {`${props.infoDays?.[0]?.weather[0].main}`}
          </Card.Subtitle>

          <Form></Form>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FirstCard;