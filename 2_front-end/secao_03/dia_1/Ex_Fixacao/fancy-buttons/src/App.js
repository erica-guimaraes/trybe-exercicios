import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);
  }

  handleClickOne = () => {
    console.log('Clicou no botão 1!', this)
  };
  
  handleClickTwo = () => {
    console.log('Clicou no botão 2!', this)
  };
  
  handleClickThree = () => {
    console.log('Clicou no botão 3!', this)
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClickOne}>Botão 1 </button>
        <button onClick={this.handleClickTwo}>Botão 2 </button>
        <button onClick={this.handleClickThree}>Botão 3 </button>
      </div>
      
    );
  }
}

export default App;
