import React from 'react';
import Welcome from './Welcome'; 
import Clock from './Clock';

function App() {
  return (
    <div> 
      <h1>My React App</h1>
      
      <Welcome name='Satoru' />
      <Welcome name='Yuji' />
      <Welcome name='Megumi' />
      
      <Clock />
    </div>
  );
}

export default App;
