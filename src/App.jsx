import './App.css';
import StoryBoardSlider from './components/slider/StoryBoardSlider';
import ShiningEffect from './components/shine'
//import BackgroundImageAnimation from './components/background';

import React from 'react';

function App() {

  const containerStyle = {
    backgroundImage: `url(${'/background.PNG'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  }

  return (
    <div style={ containerStyle }>
 
      <ShiningEffect></ShiningEffect>      
      <StoryBoardSlider></StoryBoardSlider>
            
    </div>
  );
}

export default App;
