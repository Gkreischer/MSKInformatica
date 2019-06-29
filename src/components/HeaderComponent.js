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
                </header>
            </React.Fragment>

        );
    }
}

export default Header;