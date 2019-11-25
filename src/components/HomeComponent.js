import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './../components/ConfigAparenciaGeral.css';

function Home(props){
    return(
        <Jumbotron className="text-black mb-0" style={{backgroundColor: '#ecf0f1'}}>
            <Container>
                <Row>
                    <Col xs="12" md="6">
                        <h1 className="pb-md-5">MSK Informatica</h1>
                        <p className="lead my-0">Serviços e soluções de TI para sua empresa</p>
                        <p>Redes, Servidores, Contratos, Manutenções...</p>
                        <div className="homeButtonPosition">
                            <Button className="mt-md-5" color="primary">Entre em contato</Button>
                        </div>
                    </Col>
                    <Col xs="12" md="6">
                        <img src='/assets/images/informatica.png' alt="Imagem de conserto em computadores" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        
    );
}

export default Home;