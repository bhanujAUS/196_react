export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});

// export const slideIn = (direction, type, delay, duration) => ({
//     hidden: {
//         x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0
//     },
//     show: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//             type,
//             delay,
//             duration,
//             ease: 'easeOut',
//         },
//     },
// });

export const slideVariants = (start, end) => ({
    initial: { x: start === 'left' ? '-100%' : start === 'right' ? '100%' : 0 },
    animate: { x: end === 'left' ? '-100vh' : end === 'right' ? '100vh' : 0 , transition: { duration: 3.5 } },
    exit: { x: '-100vh', opacity: 0, transition: { duration: 10, ease: 'easeInOut' } } } // Slide out to the left
);
