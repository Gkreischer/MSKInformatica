import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Container, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

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
                        <NavbarBrand href="/home">
                            <img style={{width: 100}} src={this.state.infoEmpresa.logo} alt="Logotipo da MSK Informatica" />
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <div className="nav-link">
                                        <Link to="/home">Home</Link>
                                    </div>
                                </NavItem>
                                <NavItem>
                                    <div className="nav-link">
                                       <Link to="/parceiros">Parceiros</Link>
                                    </div>
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