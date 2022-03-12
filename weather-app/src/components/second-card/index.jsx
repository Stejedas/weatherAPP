
import { Col, Row, Card } from 'react-bootstrap'
import './style.css'

function SecondCard(props) {




  return (
    <Col xl={4}>
      <Card className="p-3 mb-4 border-0 bg-white rounded" style={{ width: '400px', height: '261px'}}>
        <Card.Body>
          <Card.Text className='d-flex justify-content-between'>
           <p>Thermal Sensation: </p>  {parseInt(props.infoDays?.[0]['feels_like'].day) ? `${parseInt(props.infoDays?.[0]['feels_like'].day)} ${props.units !== 'imperial' ? 'ºC' : 'ºF'}` : <div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div>}
          </Card.Text>
          <div className='lineSecondCard'></div>
          <Card.Text className='d-flex justify-content-between'>
            <p>Precipitation Probability: </p> {`${props.infoDays?.[0].pop * 100} %`}
          </Card.Text>
          <div className='lineSecondCard'></div>
          <Card.Text className='d-flex justify-content-between'>
            <p>Wind: </p>  {`${props.infoDays?.[0]?.wind_speed} ${props.units !== 'imperial' ? 'Km/h' : 'Mill/h'}`}
          </Card.Text>
          <div className='lineSecondCard'></div>
          <Card.Text className='d-flex justify-content-between'>
            <p>Wind Gust: </p> {`${props.infoDays?.[0]?.wind_gust} ${props.units !== 'imperial' ? 'Km/h' : 'Mill/h'}`}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )

}

export default SecondCard;