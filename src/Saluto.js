import React, {Component} from 'react';

 class Saluto extends Component {

   constructor(props){
     super(props)
   }

  render(){

    const {testo} = this.props
    
    return(
      <React.Fragment>
        <p>{testo}</p>
      </React.Fragment>
    )
  }
}

export default Saluto;
