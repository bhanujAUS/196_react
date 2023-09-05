import React from 'react';
import { motion } from 'framer-motion';

import { shineVariants } from '../../utils/motion'
import './styles.css';

const ShiningEffect = () => {  
  return (
    <div className="shining-container">
      <motion.div
        className="shine"
        variants={shineVariants()}
        initial='initial'
        animate='animate'
      />
    </div>
  );
};

export default ShiningEffect;
