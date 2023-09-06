import React, { useEffect, useRef } from 'react';

const ARComponent = () => {
  const sceneRef = useRef(null);
  const arSystemRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    let arSystem;
    console.log(sceneEl);
    if (sceneEl) {
      sceneEl.addEventListener('loaded', () => {
        arSystem = sceneEl.systems["mindar-image-system"];
        arSystemRef.current = arSystem;
      });
      
      sceneEl.addEventListener("arReady", (event) => {
        console.log("MindAR is ready")
      });
      sceneEl.addEventListener("arError", (event) => {
        console.log("MindAR failed to start")
      });

      const exampleTarget = document.querySelector('#example-target');
      const examplePlane = document.querySelector('#example-plane');
      const startButton = document.querySelector("#example-start-button");
      const stopButton = document.querySelector("#example-stop-button");
      const pauseButton = document.querySelector("#example-pause-button");
      const pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");
      const unpauseButton = document.querySelector("#example-unpause-button");
      

      startButton.addEventListener('click', () => {
        console.log("start");
        arSystemRef.current.start(); // start AR 
      });
  
      stopButton.addEventListener('click', () => {
        arSystemRef.current.stop(); // stop AR 
      });
  
      pauseButton.addEventListener('click', () => {
        arSystemRef.current.pause(); // pause AR, pause video
      });
  
      pauseKeepVideoButton.addEventListener('click', () => {
        arSystemRef.current.pause(true); // pause AR, keep video
      });
  
      unpauseButton.addEventListener('click', () => {
        arSystemRef.current.unpause();
      });
       
      exampleTarget.addEventListener("targetFound", event => {
        console.log("target found");
      });
      
      exampleTarget.addEventListener("targetLost", event => {
        console.log("target lost");
      });
      
      examplePlane.addEventListener("click", event => {
        console.log("plane click");
      });
    }
  }, []);

  return (    
    <>
      <div>
        <button id="example-start-button">Start</button>
        <button id="example-pause-button">Pause</button>
        <button id="example-pause-keep-video-button">Pause (keep video)</button>
        <button id="example-unpause-button">UnPause</button>
        <button id="example-stop-button">Stop</button>
        <a-scene ref={sceneRef} 
          mindar-image="imageTargetSrc: './public/things.mind'; autoStart: false;" 
          color-space="sRGB" 
          renderer="colorManagement: true, physicallyCorrectLights" 
          vr-mode-ui="enabled: false" 
          device-orientation-permission-ui="enabled: false"
        >
          <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="near: 10; far: 10000; objects: .clickable"></a-camera>
          <a-entity id="example-target" mindar-image-target="targetIndex: 0">
            <a-plane id="example-plane" className="clickable" color="blue" opacity="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
          </a-entity>
        </a-scene>
      </div>
    </>
  );
};

export default ARComponent;
