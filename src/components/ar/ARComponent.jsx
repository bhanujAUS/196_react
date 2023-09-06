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
        const geometry = new THREE.PlaneGeometry(1, 0.55);
        const material = new THREE.MeshBasicMaterial( {color: 0x00ffff, transparent: true, opacity: 0.5} );
        const plane = new THREE.Mesh( geometry, material );
        const anchor = mindarThree.addAnchor(0);
        anchor.group.add(plane);
    
        const start = async() => {
          mindarThree.start();
        }

        start();
        
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

  return (
    <div className="container" style={{width: "100%", height: "100%"}} ref={containerRef}></div>
  );
};

export default ARComponent;