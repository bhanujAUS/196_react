import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { animatedCards } from '../../constants';
import { slideVariants } from '../../utils/motion';

const StoryBoardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedCards.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="slider-container">
      {animatedCards.map((image, index) => (
        <div>
            <motion.img
                key={image.id}
                src={image.imgUrl}
                alt={image.id}
                className="slider-image"
                initial="initial"
                animate={index === currentIndex ? 'animate' : ''}
                exit="exit"
                variants={slideVariants()}
            />
            <div>
                <a className='story-poster-text' href='/'>
                    {image.title}
                </a>
            </div>
        </div>
      ))}
    </section>
  );
};

export default StoryBoardSlider;
