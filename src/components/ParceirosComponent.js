import React from 'react';
import { Jumbotron, Row, Col, Container, Card, CardImg } from 'reactstrap';

function Parceiros (props) {
    return(
        <React.Fragment>
            <Jumbotron className="mb-0 alturaJumbotronSobre bg-dark" fluid>
                <Container className="my-5 text-white parceiros">
                    <Row>
                        <Col md="12">
                            <h1 className="text-center display-4">Parceiros</h1>
                        </Col>
                    </Row>
                    <Row className="my-md-5">
                        <Col className="mt-md-5" md="3">
                            <Card className="bg-dark">
                                <CardImg top src="assets/images/logoPolycart.png" alt="Logo Polycart - Petropolis" />
                            </Card>
                        </Col>
                        <Col className="mt-md-5" md="3">
                            <Card>
                                <CardImg top src="assets/images/logoClinicaPasteur.png" alt="Logo Clinica Pasteur - Petropolis" />
                            </Card>
                        </Col>
                        <Col className="mt-md-5" md="3">
                            <Card>
                                <CardImg top src="assets/images/logoOftalmoClinica.png" alt="Logo OftalmoClinica - Petropolis" />
                            </Card>
                        </Col>
                        <Col className="mt-md-5" md="3">
                            <Card>
                                <CardImg top src="assets/images/logoJacquard.gif" alt="Logo Jacquard Tecidos - Petropolis" />
                            </Card>
                        </Col>
                    </Row>
                    <Row className="my-md-5">
                        <Col className="mt-md-5" md="3">
                            <Card>
                                <CardImg top src="assets/images/logoClinicaPasteur.png" alt="Logo Clinica Pasteur - Petropolis" />
                            </Card>
                        </Col>
                        <Col className="mt-md-5" md="3">
                            <Card>
                                <CardImg top src="assets/images/logoOftalmoClinica.png" alt="Logo Clinica Pasteur - Petropolis" />
                            </Card>
                        </Col>
                        <Col className="mt-md-5" md="3">
                            <Card>
                                <CardImg top src="assets/images/logoOftalmoClinica.png" alt="Logo Clinica Pasteur - Petropolis" />
                            </Card>
                        </Col>
                        <Col className="mt-md-5" md="3">
                            <Card>
                                <CardImg top src="assets/images/logoImperial.png" alt="Logo Clinica Pasteur - Petropolis" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </React.Fragment>
    );
}


export default Parceiros;
