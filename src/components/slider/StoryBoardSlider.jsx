import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { animatedCards } from '../../constants';
import { slideVariants } from '../../utils/motion';

const StoryBoardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopRotation, setStopRotation] = useState(false);

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
        setStopRotation(true);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, stopRotation]);

  return (
    <section className='slider-container'>
      <AnimatePresence>
        { !stopRotation && (
          animatedCards.map((image, index) => (
            <div key={image.id}>
              <motion.img
                className='slider-image'
                src={image.imgUrl}
                alt={image.id}
                variants={slideVariants('left', 'right')}
                initial='initial'
                animate={
                  index === currentIndex
                    ? 'animate'
                    : ''
                }
                exit='exit'
              />
            </div>
          ))
        )}

        { stopRotation && (
          <div>
            <img className="slider-image" href="#" src={poster.imgUrl} alt={poster.id}/>
            <a className='story-poster-text' href='/'>
              {poster.title}
            </a>
          </div>)
        }
      </AnimatePresence>
    </section>
  );
};

export default StoryBoardSlider;
