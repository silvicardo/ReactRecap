import React, {Component, Fragment} from 'react';

class Messaggio extends Component {

  render(){
    console.log('messaggio si sta renderizzando');
    //ragionamento

    let areaMessaggio;

    if (this.props.messaggio !== null){
      areaMessaggio = (<p> L'api dice {this.props.messaggio} </p>)
    } else {
      areaMessaggio = (<p> L'api non ha ancora risposto</p>)
    }


    return  (
      <Fragment>
        {areaMessaggio}
      </Fragment>
    )
  }

}

export default Messaggio;
