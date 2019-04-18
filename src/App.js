import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Saluto from './Saluto';
import ListaStudenti from './ListaStudenti';

//componenti
//- classi
//- componenti funzionali

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      age: this.props.age,
      studenti: []
    }
  }

  // componentDidMount(){
  //
  //   axios.get(url)
  //     .then((apiData)=>{
  //       this.setState({studenti: apiData.studenti})
  //     })
  //
  // }

  render() {

    //creiamo una lista a partire dalle props

    var listaStudenti = this.state.studenti.map((studente, index) => (<li key={index}>{studente}</li>))

    //e quando sono pronto ritorno html + js
    return (
      <div className="App">
        <p>Qui sotto il mio nuovo componente</p>
        <Saluto testo={this.props.linkBenvenuto} />
        <ListaStudenti studenti={listaStudenti}/>
      </div>
    );
  }
}

App.defaultProps = {
  age: 15,
  linkBenvenuto: 'Ciao da defaultProps',
  studenti: ['Chiara', 'Leo', 'Massi', 'Giorgio', 'Gea', 'May']
}


export default App;
