import React, { Component } from 'react';
import NavbarComponent from './NavbarComponent';
import HeadComponent from './HeadComponent';
import HistoryComponent from './HistoryComponent';
import ServicesComponent from './ServicesComponent';
import ContactComponent from './ContactComponent';
class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <HeadComponent />
                <HistoryComponent />
                <ServicesComponent />
                <ContactComponent />
            </div>
        );
    }
}

export default Main;