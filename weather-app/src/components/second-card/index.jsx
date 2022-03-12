
import {Col, Row, Card} from 'react-bootstrap'


function SecondCard(props){

    function OrientationWind(or){
        switch(or){
        case (0 < or < 22.511): return "N";break;
        case (22.511 < or < 67.511): return "NE";break;
        case (67.511 < or < 112.511): return "E";break;
        case (112.511 < or < 157.511): return "SE";break;
        case (157.511 < or < 202.511): return "S";break;
        case (202.511 < or < 247.511): return "SO";break;
        case (247.511 < or < 292.511): return "O";break;
        case (292.511 < or < 337.511): return "NO";break;
        case (337.511 < or): return "N";break;
    }}

    return (
        <Col xl={4}>
        <Card>
          <Card.Body>
            <Card.Text className='d-flex justify-content-between'>
            <strong>Thermal Sensation: </strong> {parseInt(props.infoDays?.[0]['feels_like'].day)? parseInt(props.infoDays?.[0]['feels_like'].day) : <div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div> }
            </Card.Text>
           




            <Card.Text className='d-flex justify-content-between'>
          <strong>Precipitation Probability: </strong> {`${props.infoDays?.[0].pop*100} %`}
           </Card.Text>
           <Card.Text className='d-flex justify-content-between'>
           <strong>Wind: </strong> {`${props.infoDays?.[0]?.wind_speed} Km/h`}
           </Card.Text>
           <Card.Text className='d-flex justify-content-between'>
           <strong>Wind Gust: </strong> {`${props.infoDays?.[0]?.wind_gust} Km/h`}
           </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default SecondCard;