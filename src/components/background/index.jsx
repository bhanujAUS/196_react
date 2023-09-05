import React from 'react';
import { motion } from 'framer-motion';

function BackgroundImageAnimation() {
    const containerStyle = {
      backgroundImage: `url(${'/background.PNG'})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '100%',
      height: '100%',
    }
  
    return (
      <div style={{ width:'100%', height: '100%', overflow: 'hidden' }}>
        <motion.div
          initial={{ backgroundColor: 'transparent' }}
          style={containerStyle}
        />
      </div>
    );
  }
  
  export default BackgroundImageAnimation;