import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Servicos from './ServicosComponent';
import Vantagens from './VantagensComponent';
import InfoEmpresa from './InfoEmpresaComponent';
import Parceiros from './ParceirosComponent';

// States
import { INFOEMPRESA } from './../shared/infoEmpresa';
import { SERVICOSEMPRESA } from './../shared/servicosEmpresa';

import './ConfigAparenciaGeral.css';
import Home from './HomeComponent';

const HomePage = () => {
    return(
        <Home />
    );
}

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            infoEmpresa: INFOEMPRESA,
            servicosEmpresa: SERVICOSEMPRESA
        }

    }

    render() {
        return(
            <React.Fragment>
                <Header infoEmpresa={this.state.infoEmpresa}/>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route exact path='/parceiros' component={Parceiros} />
                    <Route exact path="/servicos" component={() => <Servicos servicosEmpresa={this.state.servicosEmpresa} />} />
                    <Redirect to='/home' />
                </Switch>
            </React.Fragment>
        );
    }
}

export default Main;