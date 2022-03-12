
import {Col, Row, Card} from 'react-bootstrap'


function SecondCard(props){

   

    return (
        <Col xl={4}>
        <Card  className="shadow p-3 mb-4 bg-white rounded">
          <Card.Body>
            <Card.Text className='d-flex justify-content-between'>
            <strong>Thermal Sensation: </strong> {parseInt(props.infoDays?.[0]['feels_like'].day)? `${parseInt(props.infoDays?.[0]['feels_like'].day)} ${props.units !== 'imperial' ? 'ºC':'ºF'}` : <div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div> }
            </Card.Text>

            <Card.Text className='d-flex justify-content-between'>
          <strong>Precipitation Probability: </strong> {`${props.infoDays?.[0].pop*100} %`}
           </Card.Text>
           <Card.Text className='d-flex justify-content-between'>
           <strong>Wind: </strong>  {`${props.infoDays?.[0]?.wind_speed} ${props.units !== 'imperial' ? 'Km/h':'Mill/h'}`} 
           </Card.Text>
           <Card.Text className='d-flex justify-content-between'>
           <strong>Wind Gust: </strong> {`${props.infoDays?.[0]?.wind_gust} ${props.units !== 'imperial' ? 'Km/h':'Mill/h'}`}
           </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default SecondCard;