import React, { useState } from 'react';
import './ImageHoverComponent.css';
import Poster from './Poster';

const ImageHoverComponent = ({ mainImage, hoverImage }) => {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  const handleMouseHover = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const x = (event.pageX - left) / width;
    const y = (event.pageY - top) / height;

    setHoverPosition({ x, y });
  };

  return (
    <div
      className='image-container'
      onMouseMove={handleMouseHover}
      onMouseLeave={() => setHoverPosition({ x: 0, y: 0 })}
    >
      <img 
        src={mainImage} 
        alt='Main' 
        className='main-image' 
        style={{
          alignSelf: 'center'
        }}/>
      <div className='hover-container'>
        <Poster />
      </div>
    </div>
  );
};

export default ImageHoverComponent;
