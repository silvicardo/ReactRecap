import React, {Component, Fragment}  from 'react';
import './fileCss/app.css';
import Messaggio from './Messaggio';

//componenti
//- classi
//- componenti funzionali

class App extends Component {

  //LO STATE NON VA MAI MODIFICATO DIRETTAMENTE
  state = {
    messaggio: null
  }

  componentDidMount(){
    console.log('componente montato');
  
    //chiamata api
    setTimeout(() => {
      //risultato Api
      var risultatoApi = {
        messaggio: 'abbiamo risposto'
      }
      console.log('ho ricevuto la risposta dall api');

      console.log('cambio lo state');
      this.setState(risultatoApi)
    }, 5000);


  }

  render(){

    console.log('sto per renderizzare il componente App');
    //RAGIONAMENT0

    const {nome, eta} = this.props

    //PRESENTAZIONE
    return (
      <Fragment>
      <div className="saluto">Ciao {nome} da react</div>
      <p>Hai {eta} anni</p>
      <Messaggio messaggio={this.state.messaggio} />
      </Fragment>
    )
  }

}

App.defaultProps = {
  nome: 'Riccardo',
  eta: '32'
}

export default App;
