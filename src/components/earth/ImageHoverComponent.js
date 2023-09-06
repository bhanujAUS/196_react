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
      <img src={mainImage} alt='main' className='main-image' />
      <div className='hover-container'>
        <img 
          src={hoverImage} 
          alt='hover' 
          className='hover-image'
          style={{
            alignSelf: 'center',
            clipPath: `circle(100px at ${hoverPosition.x * 100}% ${
              hoverPosition.y * 100
            }%)`,
          }}
        />
      </div>
      <div className='hover-container'>
        <Poster />
      </div>
    </div>
  );
};

export default ImageHoverComponent;
