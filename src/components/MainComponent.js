import React, { Component } from 'react';

import Header from './HeaderComponent';
import Servicos from './ServicosComponent';
import Vantagens from './VantagensComponent';
import InfoEmpresa from './InfoEmpresaComponent';
import Parceiros from './ParceirosComponent';

// States
import { INFOEMPRESA } from './../shared/infoEmpresa';
import { SERVICOSEMPRESA } from './../shared/servicosEmpresa';

import './ConfigAparenciaGeral.css';

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
                <InfoEmpresa />
                <Parceiros />
                <Servicos servicosEmpresa={this.state.servicosEmpresa}/>
                <Vantagens />
            </React.Fragment>
        );
    }
}

export default Main;