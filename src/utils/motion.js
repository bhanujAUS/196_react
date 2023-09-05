export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const shineVariants = () => ({
    initial:{ opacity: 0, width: '0%', height: '0%', x: '0%', y: '0%' },
    animate: {
        opacity: 1, 
        width: '100%', 
        height: '100%', 
        x: '0px', 
        y: '0px', 
        transition: {
          duration: 10, 
          repeat: Infinity
        }
    }
});

export const slideVariants = (start, end) => ({
    initial: { x: start === 'left' ? '-100%' : start === 'right' ? '100%' : 0, opacity: 1 },
    animate: { 
        x: end === 'left' ? '-100vh' : end === 'right' ? '100vh' : 0,
        opacity: 1,
        transition: { duration: 4, ease: 'easeOut' } 
    },
    exit: { opacity: 1 }
});
