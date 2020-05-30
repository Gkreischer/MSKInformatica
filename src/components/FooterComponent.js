import React from 'react';
import { Container, Hero, Content, Column, Title } from 'rbx';
const Footer = (props) => {
    return(
        <footer id="footer">
            <Hero color="black" gradient>
                <Hero.Body>
                    <Column.Group vcentered>
                        <Column>
                            <Content style={{textAlign: 'center'}}>
                                <Title as="h3" subtitle><i className="fa fa-envelope-o" aria-hidden="true"></i> mskinformatica@gmail.com</Title>
                                <Title as="h3" subtitle><i className="fa fa-map-marker" aria-hidden="true"></i> Petrópolis, RJ - Brasil</Title>
                            </Content>
                        </Column>
                    </Column.Group>
                </Hero.Body>
            </Hero>
        </footer>
    );
}

export default Footer;