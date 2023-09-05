import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { animatedCards } from '../../constants';
import { slideVariants, staggerContainer, popUp } from '../../utils/motion';

const StoryBoardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopRotation, setStopRotation] = useState(false); // Add a state to control rotation

  const finalVariant = {
    opacity: 1
  };

  const poster = {
    id: 'poster',
    imgUrl: '/poster.png',
    title: 'CLICK HERE TO CLAIM',
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < animatedCards.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Stop the rotation when we reach the last image with id "poster"
        setStopRotation(true);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, stopRotation]);

  return (
    <section className='slider-container'>
      { !stopRotation && (
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
                    variants={popUp()}
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
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        )
      }

      { stopRotation && (
        <div>
          <img className="slider-image" href="#" src={poster.imgUrl} alt={poster.id}/>
          <a className='story-poster-text' href='/'>
            {poster.title}
          </a>
        </div>
      )
      }
    </section>
  );
};

export default StoryBoardSlider;
