import './App.css';

import StoryBoardSlider from './components/slider/StoryBoardSlider';
import ShiningEffect from './components/shine'

import React from 'react';

function App() {

  const containerStyle = {
    backgroundImage: `url(${'/background.PNG'})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
  }

  return (
    <div className='slider-container'>
      <div style={ containerStyle }>
  
        <ShiningEffect></ShiningEffect>      
        <StoryBoardSlider></StoryBoardSlider>
       
      </div>
    </div>
  );
}

export default App;
