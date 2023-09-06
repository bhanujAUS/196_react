import React, { useEffect, useRef } from 'react';

import './styles.css'

import {MindARThree} from 'mind-ar/dist/mindar-image-three.prod.js';
import * as THREE from 'three';

const ARComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const mindarThree = new MindARThree({
      container: containerRef.current,
      imageTargetSrc: "./card.mind"
    });

    const {renderer, scene, camera} = mindarThree ? mindarThree : {};
   
    if (mindarThree) {
        const anchor = mindarThree.addAnchor(0);
        const geometry = new THREE.PlaneGeometry(1, 0.55);
        const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
        const plane = new THREE.Mesh( geometry, material );
        anchor.group.add(plane);
    
        mindarThree.start();
        
        if (renderer) {
            renderer.setAnimationLoop(() => {
                renderer.render(scene, camera);
              });
        } else {
            console.log("Renderer Absent");
        }
       
    }

    return () => {
      if (renderer) {
          renderer.setAnimationLoop(null);
      }
      if (mindarThree && mindarThree !== 'undefined') {
          //mindarThree.stop(); 
      }
   }
  }, []);

  const exampleTarget = document.querySelector('#example-target');
  const examplePlane = document.querySelector('#example-plane');
  const startButton = document.querySelector("#example-start-button");
  const stopButton = document.querySelector("#example-stop-button");
  const pauseButton = document.querySelector("#example-pause-button");
  const pauseKeepVideoButton = document.querySelector("#example-pause-keep-video-button");
  const unpauseButton = document.querySelector("#example-unpause-button");
  
  startButton && startButton.addEventListener('click', () => {
    console.log("start");
    containerRef.current.start(); // start AR 
  });

  stopButton && stopButton.addEventListener('click', () => {
    containerRef.current.stop(); // stop AR 
  });

  pauseButton && pauseButton.addEventListener('click', () => {
    containerRef.current.pause(); // pause AR, pause video
  });

  pauseKeepVideoButton && pauseKeepVideoButton.addEventListener('click', () => {
    containerRef.current.pause(true); // pause AR, keep video
  });

  unpauseButton && unpauseButton.addEventListener('click', () => {
    containerRef.current.unpause();
  });
   
  if (exampleTarget) {
    exampleTarget.addEventListener("targetFound", event => {
      console.log("target found");
    });
    
    exampleTarget.addEventListener("targetLost", event => {
      console.log("target lost");
    });
  }

  examplePlane && examplePlane.addEventListener("click", event => {
    console.log("plane click");
  });

  return (    
    <>
      <div className="container">
        <button id="example-start-button">Start</button>
        <button id="example-pause-button">Pause</button>
        <button id="example-pause-keep-video-button">Pause (keep video)</button>
        <button id="example-unpause-button">UnPause</button>
        <button id="example-stop-button">Stop</button>

        <div className="container" style={{width: "100%", height: "100%"}} ref={containerRef}>
          <div id="example-target" mindar-image-target="targetIndex: 0"></div>
          <div id="example-plane" className="clickable" color="red"></div>
        </div>
      </div>
    </>
  );
};

export default ARComponent;