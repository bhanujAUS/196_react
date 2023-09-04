import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { animatedCards } from '../../constants';
import { slideVariants, staggerContainer } from '../../utils/motion';

const StoryBoardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedCards.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className='slider-container'>
      <AnimatePresence>
        <motion.div
          variants={staggerContainer}
          initial='hidden'
          whileInView='show'
          viewport={{once: true}}
        >   
          {animatedCards.map((image, index) => (
            <div>
              <motion.img
                className='slider-image'
                key={image.id}
                src={image.imgUrl}
                alt={image.id}
                variants={slideVariants('right', 'left')}
                initial='initial'
                animate={index === currentIndex ? 'animate' : ''}
                exit='exit'                
              />
                {/* <div>
                    <a className='story-poster-text' href='/'>
                        {image.title}
                    </a>
                </div> */}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default StoryBoardSlider;
