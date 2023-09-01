export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

export const slideIn = (direction, type, delay, duration) => ({
    hidden: {
        x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            type,
            delay,
            duration,
            ease: 'easeOut',
        },
    },
});

export const slideVariants = () => ({
    initial: { x: '100vw' }, // Start from the right side
    animate: { x: '0vw', transition: { duration: 1 } }, // Move to the center
    exit: { x: '-100vw', transition: { duration: 1, ease: 'easeInOut' } } // Slide out to the left
});
