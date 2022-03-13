
import { Col, Row, Card } from 'react-bootstrap'
import './style.css'

function SecondCard(props) {




  return (
    <Col xl={3}>
      <Card className="p-1 border-0 bg-white rounded" style={{ width: '326px', height: '231px'}} >
       
          <Card.Text className='d-flex justify-content-between p-1 unMargin text-center ' style={{ width: '100%'}}>
           <p>Thermal Sensation: </p>  {parseInt(props.infoDays?.[0]['feels_like'].day) ? `${parseInt(props.infoDays?.[0]['feels_like'].day)} ${props.units !== 'imperial' ? 'ºC' : 'ºF'}` : <div class="spinner-grow" role="status"><span class="visually-hidden">Loading...</span></div>}
          </Card.Text>
          <div className='lineSecondCard'></div>
          <Card.Text className='d-flex justify-content-between p-1 unMargin' style={{ width: '100%'}}>
            <p>Precipitation Probability: </p> {`${props.infoDays?.[0].pop * 100} %`}
          </Card.Text>
          <div className='lineSecondCard'></div>
          <Card.Text className='d-flex justify-content-between p-1 unMargin' style={{ width: '100%'}}>
            <p>Wind: </p>  {`${props.infoDays?.[0]?.wind_speed} ${props.units !== 'imperial' ? 'Km/h' : 'Mill/h'}`}
          </Card.Text>
          <div className='lineSecondCard'></div>
          <Card.Text className='d-flex justify-content-between p-1 unMargin' style={{ width: '100%'}}>
            <p>Wind Gust: </p> {`${props.infoDays?.[0]?.wind_gust} ${props.units !== 'imperial' ? 'Km/h' : 'Mill/h'}`}
          </Card.Text>
       
      </Card>
    </Col>
  )

}

export default SecondCard;