import React from 'react';
import Image from './Image';
import cat from './cat.jpg'

function App() {
  return (
    <main>
      <Image source={ cat } alternativeTex='Cute cat staring'/>
    </main>
  );
}

export default App;
