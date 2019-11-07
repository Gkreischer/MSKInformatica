import React from 'react';
import { Parallax } from 'react-parallax';
import { parallaxImage } from '../shared/parallaxImage';
import { Card, CardBody, CardTitle, Row, Col} from 'reactstrap';
function Vantagens(props) {

    return (
        <React.Fragment>
            <Parallax
                blur={5}
                bgImage={parallaxImage}
                bgImageAlt="MSK Informatica"
                strength={800}>
                <div id="blocoVantagensServicos">
                    <div className="container">
                        <Row>
                            <div className="col-12 col-md-12 my-sm-5">
                                <h1 className="mt-md-5 text-white">Veja as vantagens de contratar nossos serviços:</h1>
                            </div>
                        </Row>
                        <Row className="mb-md-5">
                            <Col xs="12" md="4" className="text-black ">
                                <Card className="mt-3 mt-md-5 cardVantagensServicos">
                                    <CardBody className="p-5">
                                        <CardTitle><b>Segurança</b></CardTitle>
                                        <CardBody>Sua empresa seguirá normas de segurança e terá um profissional capacitado para agir 
                                            em caso de brechas.
                                        </CardBody>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="12" md="4" className="text-black cardVantagensServicos">
                                <Card className="mt-2 mt-md-5">
                                    <CardBody className="p-5">
                                        <CardTitle><b>Confiabilidade</b></CardTitle>
                                        <CardBody>Tempo é dinheiro! Sabemos disso e oferecemos as soluções para manter sua empresa <b>sempre</b> funcionando.
                                        </CardBody>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="12" md="4" className="text-black cardVantagensServicos">
                                <Card className="mt-2 mt-md-5">
                                    <CardBody className="p-5">
                                        <CardTitle><b>Rapidez</b></CardTitle>
                                        <CardBody>Aqui trabalhamos para evitar problemas, porém, quando eles aparecem, trabalhamos para resolvê-lo.
                                        </CardBody>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Parallax>
        </React.Fragment>
    );
}

export default Vantagens;