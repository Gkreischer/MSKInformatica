import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Container } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);


        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            infoEmpresa: props.infoEmpresa
        };

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <header>
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand href="/">{this.state.infoEmpresa.nome}</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <span className="text-white">{this.state.infoEmpresa.email} | {this.state.infoEmpresa.telefone} | {this.state.infoEmpresa.whatsapp}</span>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Jumbotron className="alturaJumbotron corJumbotron mb-0" fluid>
                        <Container className="my-5 text-white" fluid>
                            <h1 className="display-4">Suporte e manutenção</h1>
                            <p className="lead">Oferecemos as melhores soluções para sua empresa se manter segura e eficiente.</p>
                        </Container>
                    </Jumbotron>
                </header>
            </React.Fragment>

        );
    }
}

export default Header;