import React from 'react';
import { Column, Container, Title, Hero } from 'rbx';
import { Parallax } from 'react-parallax';

const HeadComponent = () => {
    return (
        <Parallax
            blur={{ min: 0, max: 5 }}
            bgImage={require('./shared/main.jpg')}
            bgImageAlt="Motherboard Picture"
            strength={800}
            bgImageStyle={{ objectFit: 'cover' }}
        >
            <div id="parallax" >
                <Container>
                    <Column.Group>
                        <Column size={8} >
                            <Hero color="info" gradient id="spaceText">
                                <Hero.Body>
                                    <Container>
                                        <Title>MSK Informática</Title>
                                        <Title as="h2" subtitle>
                                            Tudo que você precisa para manter sua rede e equipamentos de computação funcionais.
                                    </Title>
                                    </Container>
                                </Hero.Body>
                            </Hero>
                        </Column>
                    </Column.Group>
                </Container>
            </div>
        </Parallax>
    );
}

export default HeadComponent;