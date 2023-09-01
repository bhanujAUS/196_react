import React from 'react';
import { motion } from 'framer-motion';

import { animatedCards, poster } from '../../constants';
import {staggerContainer, slideIn} from '../../utils/motion'

export const StoryBaord = () => {
  return (
    <section>
      <div className="storyboard-container">
        {animatedCards.map( (image, index) => (
          <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{once: false, amount: 0.25}}
            className='story-container'
            >
              <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='story'
              >
                <img
                  src={image.imgUrl}
                  alt={image.id}
                  className=''
                />
                <h3 className='story-text'>
                    {image.title}
                </h3>
              </motion.div>
          </motion.div>
        ))}

        {/* Poster */}
        <motion.div
            variants={staggerContainer}
            initial='hidden'
            whileInView="show"
            className='story-container'
            >
              <motion.div
                variants={slideIn('right', 'tween', 0.2, 1)}
                className='story'
              >
                <img
                  src={poster.imgUrl}
                  alt={poster.id}
                  className=''
                />
                <a className='story-poster-text' href='/'>
                    {poster.title}
                </a>
              </motion.div>
          </motion.div>
      </div>
    </section>
  )
}
