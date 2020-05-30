import React from 'react';
import { Hero, Container, Title, Column, Image } from 'rbx';
const HistoryComponent = () => {
    return (
        <Hero gradient color={"link"} size={"medium"}>
            <Hero.Body>
                <Container>
                    <Column.Group vcentered>
                        <Column size={7} style={{display: 'flex', justifyContent: 'center'}}>
                            <Image.Container>
                                <Image rounded src={require('./shared/bonecomsk.png')} />
                            </Image.Container>
                        </Column>
                        <Column size={5}>
                            <Title size={2}> Nossa história é simples</Title>
                            <Title as="h2" subtitle>
                                Muito trabalho e esforço para atender nossos clientes bem. Investimos em qualidade
                                para que sua residência/empresa tenha o melhor de Tecnologia da Informação.
                        </Title>
                        </Column>
                    </Column.Group>
                </Container>
            </Hero.Body>
        </Hero>
    );
}

export default HistoryComponent;