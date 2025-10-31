"use client"
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const CurtainTransition = ({ children }) => {
  const pathname = usePathname();

  const curtainVariants = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 0,
    },
    exit: {
      scaleY: 1,
    },
  };

  const slideVariants = {
    initial: {
      y: '100vh',
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: '-100vh',
      opacity: 0,
    },
  };

  return (
    <>
      {/* Curtain overlay */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`curtain-${pathname}`}
          className="fixed inset-0 z-50 bg-black origin-top pointer-events-none"
          variants={curtainVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        />
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          variants={slideVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default CurtainTransition;