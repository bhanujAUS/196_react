import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

function BackgroundImageAnimation() {
    
    const controls = useAnimation();

    useEffect(() => {
        const startAnimation = async () => {
          // Animate to white background
          await controls.start({ backgroundColor: 'black', transition: { duration: 10 } });
        };
    
        startAnimation();
      
    }, [controls]);

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
          animate={controls}
          style={containerStyle}
        />
      </div>
    );
  }
  
  export default BackgroundImageAnimation;