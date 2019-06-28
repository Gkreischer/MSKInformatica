import React from 'react';
import { Parallax } from 'react-parallax';
import { parallaxImage } from '../shared/parallaxImage';
import { Card, CardBody, CardTitle} from 'reactstrap';
function Vantagens(props) {

    return (
        <React.Fragment>
            <Parallax
                blur={5}
                bgImage={parallaxImage}
                bgImageAlt="MSK Informatica"
                strength={800}>
                <div style={{ height: '1100px' }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 mt-5 my-sm-5">
                                <h1 className="mt-md-5 text-white">Veja as vantagens de contratar nossos serviços:</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-4 text-black mt-md-5">
                                <Card className="mt-2 mt-md-5">
                                    <CardBody className="p-5">
                                        <CardTitle><b>Confiabilidade</b></CardTitle>
                                        <CardBody>Sua empresa seguirá normas de segurança e terá um profissional capacitado para agir 
                                            em caso de brechas.
                                        </CardBody>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-4 text-black mt-md-5">
                                <Card className="mt-2 mt-md-5">
                                    <CardBody className="p-5">
                                        <CardTitle><b>Confiabilidade</b></CardTitle>
                                        <CardBody>Tempo é dinheiro! Sabemos disso e oferecemos as soluções para manter sua empresa <b>sempre</b> funcionando.
                                        </CardBody>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-12 col-md-4 text-black mt-md-5">
                                <Card className="mt-2 mt-md-5">
                                    <CardBody className="p-5">
                                        <CardTitle><b>Rapidez</b></CardTitle>
                                        <CardBody>Aqui trabalhamos para evitar problemas, porém, quando ele aparece, trabalhamos para resolvê-lo.
                                        </CardBody>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </Parallax>
        </React.Fragment>
    );
}

export default Vantagens;