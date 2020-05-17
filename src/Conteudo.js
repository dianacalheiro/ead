import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Conteudo() {
    return (
        <Col xs={12} md={12} lg={12} style={{float: 'none', display: 'inline-block'}}> 
        <Col xs={4} md={4} lg={4} style={{float: 'none', display: 'inline-block'}}>  
        <Card>
            <Card.Header style={{backgroundColor:'orange'}}>Turma de Exemplo </Card.Header>
            <Card.Body>
                Turma A
            </Card.Body>
            <Card.Footer>footer </Card.Footer>
        </Card>
        </Col>
        <Col xs={4} md={4} lg={4} style={{float: 'none', display: 'inline-block'}}>
        <Card>
        <Card.Header style={{backgroundColor:'blue'}}>3º Ano M </Card.Header>
        <Card.Body>
            <Card.Text>
            Data de entrega: segunda-feira
            <br></br>
            08:00 - "ALEGRAR!"
            </Card.Text>
        </Card.Body>
        <Card.Footer>footer </Card.Footer>
         </Card>
         </Col>
         </Col>
    );
  }
  
  export default Conteudo;
  