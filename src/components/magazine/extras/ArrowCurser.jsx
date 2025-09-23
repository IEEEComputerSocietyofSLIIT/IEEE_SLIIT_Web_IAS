import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ArrowCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none cursor-none"
      style={{ zIndex: 9999 }}
    >
      <AnimatePresence>
        <motion.div
          key="cursor-dot"
          style={{
            position: 'fixed',
            top: mousePosition.y - 5,
            left: mousePosition.x + 5,
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cursorVariants}
        >
          {/* Cursor dot */}
          <div
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center shadow-md shadow-black/30"
            style={{
              background: 'white',
              borderRadius: '50%',
              padding: '5px 5px',
            }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ArrowCursor;
