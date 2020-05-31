import React from 'react';
import { Hero, Container, Title, Column, Image } from 'rbx';
import Lottie from 'react-lottie';
import * as animationData from './shared/work.json';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    
  };

const HistoryComponent = () => {
    return (
        <Hero gradient >
            <Hero.Body>
                <Container>
                    <Column.Group vcentered>
                        <Column size={7} style={{display: 'flex', justifyContent: 'center'}}>
                            <Lottie options={defaultOptions} width={600}/>
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