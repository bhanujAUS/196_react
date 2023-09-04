import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { animatedCards } from '../../constants';
import { slideVariants, staggerContainer } from '../../utils/motion';

const StoryBoardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopRotation, setStopRotation] = useState(false); // Add a state to control rotation

  const finalVariant = {
    opacity: 1
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < animatedCards.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Stop the rotation when we reach the last image with id "poster"
        clearInterval(timer);
        setStopRotation(true);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, stopRotation]);

  return (
    <section className='slider-container'>
      <AnimatePresence>
        <motion.div
          key={'test'}
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          {animatedCards.map((image, index) => (
            <div key={image.id}>
              <motion.img
                className='slider-image'
                src={image.imgUrl}
                alt={image.id}
                variants={slideVariants('right', 'left')}
                initial='initial'
                // Use a conditional to determine the animation for the last image
                animate={
                  index === currentIndex
                    ? stopRotation
                      ? finalVariant // Apply the "final" variant to keep it static
                      : 'animate' // Continue with the regular animation
                    : ''
                }
                exit='exit'
              />
              {/* Check if the current image is the last one with id "poster" */}
              {/* {index === animatedCards.length - 1 && image.id === 'poster' && (
                <div>
                  <a className='story-poster-text' href='/'>
                    {image.title}
                  </a>
                </div>
              )} */}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default StoryBoardSlider;
