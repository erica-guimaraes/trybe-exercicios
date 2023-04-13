import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleClickOne = this.handleClickOne.bind(this);
    this.handleClickTwo = this.handleClickTwo.bind(this);
    this.handleClickThree = this.handleClickThree.bind(this);

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,
    }
  }

  handleClickOne = () => {
    this.setState((estadoAnterior, _props) => ({
      clicksBtnOne: estadoAnterior.clicksBtnOne + 1,
    }));
  };
  
  handleClickTwo = () => {
    this.setState((estadoAnterior, _props) => ({
      clicksBtnTwo: estadoAnterior.clicksBtnTwo + 1,
    }))
  };
  
  handleClickThree = () => {
    this.setState((estadoAnterior, _props) => ({
      clicksBtnThree: estadoAnterior.clicksBtnThree + 1,
    }))
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
