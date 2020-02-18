import React from 'react';

import './App.css';
import Carousel from './view/components/Carousel';
import Red from './view/pages/Red';
import Blue from './view/pages/Blue';

function App() {
  
  return (
    <div className="App">
      <Carousel entering={<Red />} exiting={<Blue />}/>
    </div>
  );
}

export default App;
