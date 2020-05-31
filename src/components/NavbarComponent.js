import React from 'react';
import { Navbar } from 'rbx';

const NavbarComponent = (props) => {
    return (
        <Navbar color="dark">
            <Navbar.Brand>
                <Navbar.Item>
                    <p><b>Contato:</b> <a href="tel:(22)2222-2222">(22) 2222 - 2222</a> || <b>Email:</b><a href="mailto:mskinformatica@gmail.com"> mskinformatica@gmail.com</a></p>
                </Navbar.Item>
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavbarComponent;