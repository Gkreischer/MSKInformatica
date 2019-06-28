import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import { INFOEMPRESA } from './../shared/infoEmpresa';

function InfoEmpresa(props) {
    return (
        <React.Fragment>
            <Jumbotron className="mb-0 alturaJumbotronServicos" fluid>
                <Container className="my-5 text-black">
                    <Row>
                        <Col md="12">
                            <h1 className="text-left display-4">Sobre</h1>
                        </Col>
                    </Row>
                    <Row className="my-md-5">
                        <Col className="mt-md-5" md="7">
                            <p className="text-left tamanhoTextoMedio">A MSK Informática possui + de 10 anos de experiência com uma cartela de parceiros que confiam em nosso trabalho
                                e profissionais capacitados para atender suas necessidades tecnólogicas.
                            </p>
                        </Col>
                        <Col md="5">
                            <img id="logoEmpresa" src={INFOEMPRESA.logo} alt="Logo da empresa" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    );
}

export default InfoEmpresa;