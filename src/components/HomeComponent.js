import React from 'react';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

function Home(props){
    return(
        <Jumbotron className="text-black mb-0" style={{backgroundColor: '#ecf0f1'}}>
            <Container>
                <Row>
                    <Col xs="12" md="6">
                        <h1 className="display-3">MSK Informatica</h1>
                        <p className="lead">Serviços e soluções de TI para sua empresa</p>
                        <p>Redes, Servidores, Contratos, Manutenções...</p>
                    </Col>
                    <Col xs="12" md="6">
                        <img className="" src='/assets/images/informatica.png' alt="Imagem de conserto em computadores" className="img-fluid" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        
    );
}

export default Home;