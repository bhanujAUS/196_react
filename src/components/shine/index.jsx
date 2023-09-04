import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './styles.css';

const ShiningEffect = () => {
    const controls = useAnimation();
  
    React.useEffect(() => {
      controls.start({
        opacity: 1, 
        width: '100%', 
        height: '100%', 
        x: '0px', 
        y: '0px', 
        transition: {
          duration: 9, 
          repeat: Infinity
        },
      });
    }, [controls]);
  
    return (
      <div className="shining-container">
        <motion.div
          className="shine"
          initial={{ opacity: 0, width: '0%', height: '0%', x: '0%', y: '0%' }}
          animate={controls}
        />
      </div>
    );
  };

export default ShiningEffect;