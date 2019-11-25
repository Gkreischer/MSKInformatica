import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './../components/ConfigAparenciaGeral.css';
import { defaultRoute } from './../shared/defaultUrl';
const Footer = () => {
    return (
        <div className="bg-dark" style={{ height: 250 }}>
            <Container>
                <Row>
                    <Col>
                        <ul style={{ marginTop: 50 }} className="list-unstyled links-list-custom">
                            <li>
                                <Link to="/home">Home</Link>
                            </li>
                            <li>
                                <Link to="/quemSomos">Quem Somos</Link>
                            </li>
                            <li>
                                <Link to="/solucoes">Soluções</Link>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <div className="text-white" style={{marginTop: 50}}>
                            <p className="lead"><i className="fa fa-envelope" aria-hidden="true"></i> mskinformatica@gmail.com</p>
                            <p className="lead"><i className="fa fa-phone" aria-hidden="true"></i> (24) 2222 - 2222</p>
                            <p className="lead"><i className="fa fa-map-marker" aria-hidden="true"></i> Petrópolis - RJ</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;