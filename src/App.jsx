import './App.css';

//import StoryBoardSlider from './components/slider/StoryBoardSlider';
//import ShiningEffect from './components/shine'

import React from 'react';

import 'aframe';
import 'mind-ar/dist/mindar-image-aframe.prod.js';

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
        <div>
          <a-scene mindar-image="imageTargetSrc: /targets.mind;" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
            <a-entity mindar-image-target="targetIndex: 0">
              <a-plane color="black" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
            </a-entity>
          </a-scene>
        </div>
       
      
    </div>
  );
}

export default App;
