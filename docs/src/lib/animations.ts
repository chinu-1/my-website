import { Variants } from "framer-motion";

// Main container animations
export const containerVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Standard item animations
export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5,
      ease: "easeOut" 
    }
  }
};

// Staggered item animations for lists
export const listItemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -10 
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { 
      delay: custom * 0.1,
      duration: 0.4
    }
  })
};

// Animation for progress bars
export const progressVariants: Variants = {
  hidden: { 
    width: 0 
  },
  visible: (custom: number) => ({
    width: `${custom}%`,
    transition: { 
      duration: 1, 
      ease: "easeOut" 
    }
  })
};

// Animation for scale-in effect
export const scaleVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6 
    }
  }
};

// Animation for fade-in effect
export const fadeVariants: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: { 
      duration: 0.6 
    }
  }
};
