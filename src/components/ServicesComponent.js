import React from 'react';
import { Hero, Container, Column, Image, Media, Title, Content, Card } from 'rbx';

const ServicesComponent = (props) => {
    return (
        <Hero size={"medium"}>
            <Hero.Body>
                <Container>
                    <Column.Group multiline centered>
                        <Column size={12}>
                            <Title size={1} style={{ textAlign: 'center', marginBottom: 120 }}>Veja nossos serviços</Title>
                        </Column>
                    </Column.Group>
                    <Column.Group>
                        <Column>
                            <Card>
                                <Card.Image>
                                    <Image.Container size="4by3">
                                        <Image src={require('./shared/network.jpg')} />
                                    </Image.Container>
                                </Card.Image>
                                <Card.Content>
                                    <Media>
                                        <Media.Item>
                                            <Title as="p" size={4}>
                                                Redes de Computadores
                                            </Title>
                                            <Title as="p" subtitle size={6}>
                                                Planejamento, construção e manutenção
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    <Content>
                                        Tenha controle total da sua rede, monitoramento contínuo e acesso seguro através de nossas soluções.
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                        <Column>
                            <Card>
                                <Card.Image>
                                    <Image.Container size="4by3">
                                        <Image src={require('./shared/computer_repair.jpg')} />
                                    </Image.Container>
                                </Card.Image>
                                <Card.Content>
                                    <Media>
                                        <Media.Item>
                                            <Title as="p" size={4}>
                                                Computadores
                                            </Title>
                                            <Title as="p" subtitle size={6}>
                                                Montagem e manutenção
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    <Content>
                                        Tenho seu computador plenamente funcional, com rapidez e preço justo.
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                        <Column>
                            <Card>
                                <Card.Image>
                                    <Image.Container size="4by3">
                                        <Image src={require('./shared/contract.jpg')} />
                                    </Image.Container>
                                </Card.Image>
                                <Card.Content>
                                    <Media>
                                        <Media.Item>
                                            <Title as="p" size={4}>
                                                Contratos
                                            </Title>
                                            <Title as="p" subtitle size={6}>
                                                Orçamentos
                                            </Title>
                                        </Media.Item>
                                    </Media>
                                    <Content>
                                        Tenha sua empresa e seus equipamentos sempre funcionais, com cobertura total de serviço.
                                    </Content>
                                </Card.Content>
                            </Card>
                        </Column>
                    </Column.Group>
                    <Column.Group >
                        <Column style={{ textAlign: 'center', marginTop: 120 }}>
                            <Title>Utilizamos as últimas tecnologias do mercado</Title>
                        </Column>
                    </Column.Group>
                    <Column.Group id="brand_logos" vcentered multiline>
                        <Column size={2}>
                            <Image.Container size={128}>
                                <Image src={require("./shared/logo_amazon.svg")} />
                            </Image.Container>
                        </Column>
                        <Column>
                            <Image.Container size={2} style={{ height: 50, width: 180 }} size={128}>
                                <Image src={require("./shared/logo_pfsense.png")} />
                            </Image.Container>
                        </Column>
                        <Column>
                            <Image.Container size={2} size={128}>
                                <Image src={require("./shared/logo_linux.png")} />
                            </Image.Container>
                        </Column>
                        <Column>
                            <Image.Container size={2} size={128}>
                                <Image src={require("./shared/logo_windows.png")} />
                            </Image.Container>
                        </Column>
                    </Column.Group>
                </Container>
            </Hero.Body>
        </Hero>
    );
}

export default ServicesComponent;