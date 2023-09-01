import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { animatedCards } from '../../constants';
import { slideVariants } from '../../utils/motion'

const StoryBoardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedCards.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider-container">
      {animatedCards.map((image, index) => (
        <motion.img
          key={index}
          src={image.imgUrl}
          alt={image.id}
          className="slider-image"
          initial="initial"
          animate={index === currentIndex ? 'animate' : ''}
          exit="exit"
          variants={slideVariants()}
        />
      ))}
    </div>
  );
};

export default StoryBoardSlider;
