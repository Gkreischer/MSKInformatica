import React from 'react';
import { Hero, Title, Container, Column, Field, Label, Control, Input, Textarea, Button, Notification } from 'rbx'
const ContactComponent = (props) => {
    return(
        <Hero size={"medium"} gradient color={"info"}>
            <Hero.Body>
                <Container>
                    <Column.Group style={{textAlign: 'center'}}>
                        <Column>
                            <Title size={1}>Contato</Title>
                            <Title subtitle size={3}>Quer falar conosco? Só preencher abaixo</Title>
                        </Column>
                    </Column.Group>
                    <Column.Group centered>
                        <Column size={6}>
                            <form>
                                <Field>
                                    <Label size={"large"} style={{color: "white"}}>Seu email</Label>
                                    <Control>
                                        <Input type="text" />
                                    </Control>
                                </Field>
                                <Field>
                                    <Label size={"large"} style={{color: "white"}}>Mensagem</Label>
                                    <Control>
                                        <Textarea rows={10}/>
                                    </Control>
                                </Field>
                                <Field style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                                    <Button size={"large"} color={"primary"}>Enviar</Button>
                                </Field>
                            </form>
                        </Column>
                    </Column.Group>
                    <Column.Group centered>
                        <Column size="6">
                            <Notification style={{textAlign: 'center'}} color="primary" >
                                <p>Sua mensagem foi enviada. <b>Entraremos em contato por email.</b></p>
                            </Notification>
                        </Column>
                    </Column.Group>
                    <Column.Group centered>
                        <Column size={6}>
                            <Notification style={{textAlign: 'center'}} color="danger" >
                                <p>Desculpe-nos, algo errado aconteceu...</p>
                            </Notification>
                        </Column>
                    </Column.Group>
                </Container>
            </Hero.Body>
        </Hero>
    );
}

export default ContactComponent;