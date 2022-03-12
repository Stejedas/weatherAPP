
import {Col, Row, Card} from 'react-bootstrap'


function SecondCard(props){

   

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
           <strong>Wind: </strong>  {`${props.infoDays?.[0]?.wind_speed} Km/h`}
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