import React, { Component } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-social/bootstrap-social.css';
import 'font-awesome/css/font-awesome.css';
import Main from './components/MainComponent';
import { Helmet } from 'react-helmet'

import { BrowserRouter } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>MSK Informatica</title>
            <meta name="description" content="Serviços de informatica para residência e empresas com o melhor da tecnologia e segurança"></meta>
          </Helmet>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
