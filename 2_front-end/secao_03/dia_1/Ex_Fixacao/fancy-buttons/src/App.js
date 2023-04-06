import React from 'react';
import './App.css';

const handleClickOne = () => {
  console.log('Clicou no botão 1!')
};

const handleClickTwo = () => {
  console.log('Clicou no botão 2!')
};

const handleClickThree = () => {
  console.log('Clicou no botão 3!')
};

class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={ handleClickOne }>Botão 1 </button>
        <button onClick={ handleClickTwo }>Botão 2 </button>
        <button onClick={ handleClickThree }>Botão 3 </button>
      </div>
      
    );
  }
}

export default App;
