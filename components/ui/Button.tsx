import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  icon 
}) => {
  const baseClasses = "relative overflow-hidden px-8 py-4 rounded-full font-sans font-semibold flex items-center justify-center gap-2 transition-all duration-300";
  
  const variants = {
    primary: "bg-raitha-teal text-white shadow-[0_0_24px_rgba(33,142,141,0.3)] hover:shadow-[0_0_32px_rgba(33,142,141,0.5)] border border-transparent",
    secondary: "bg-white text-raitha-teal border border-raitha-teal/20 shadow-lg hover:shadow-xl",
    outline: "bg-transparent border border-raitha-teal text-raitha-teal hover:bg-raitha-teal/5",
    glass: "glass-button text-raitha-teal hover:bg-raitha-teal/20"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, translateY: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
      {icon && <span className="ml-1">{icon}</span>}
    </motion.button>
  );
};