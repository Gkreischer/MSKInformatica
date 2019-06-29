import React from 'react';
import {
    Jumbotron, Container, Card, CardImg, CardText, CardBody,
    CardTitle, Row, Col
} from 'reactstrap';


function Servicos(props) {

    const servicosEmpresa = props.servicosEmpresa;

    const servicos = servicosEmpresa.map((servico) => {
        console.log(servico);

        return (
            <Col md={4} key={servico.id}>
                <Card className="mt-3 mt-md-0">
                <CardImg top width="100%" src={servico.imagem} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{servico.nome}</CardTitle>
                        <CardText className="text-left">{servico.descricao}</CardText>
                    </CardBody>
                </Card>
            </Col>
        );
    })
    return (
        <React.Fragment>
            <Jumbotron className="alturaJumbotronServicos bg-white mb-0" fluid>
                <Container className="my-5" fluid>
                    <h1 className="display-4 text-dark">Serviços</h1>
                    <Container>
                        <Row className="justify-content-center my-5">
                            {servicos}
                        </Row>
                    </Container>
                </Container>
            </Jumbotron>
        </React.Fragment>
    );
}

export default Servicos;
