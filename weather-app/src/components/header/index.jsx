import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";

import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";


// import {BsGeoAltFill} from 'react-icons/Bs'




function Header() {

    return (
      <Container>
        
        <Row>
          <Col xl={12}>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="m-auto my-2 p-2 gap-5 my-lg-0"style={{ maxHeight: "100px" }}navbarScroll>
                  <Nav.Link href="#action1">Clima</Nav.Link>
                  <Nav.Link href="#action1">Favoritos</Nav.Link>
                  <Nav.Link href="#action1">Tipos</Nav.Link>
                  <Nav.Link href="#action1">Temporada</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Buscar pais..."
                    className="me-4"
                    aria-label="Search"/>
                </Form>
                <Button variant="light">
                 
                </Button>
                <Button variant="light">
                 
                 </Button>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    );
  }
  export default Header;
  