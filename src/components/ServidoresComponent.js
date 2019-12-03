import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Card, CardBody } from 'reactstrap';
import { exemplosServidores } from './../shared/exemplosServidores';

class Servidores extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }

        console.log(JSON.stringify(this.state.exemplos));
    }
    
    render() {

        return(
            <div>
                <Jumbotron>
                    <Container>
                        <Row>
                            <Col xs="12">
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Servidores;