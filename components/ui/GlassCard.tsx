import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  delay?: number;
  variant?: 'light' | 'dark';
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  delay = 0,
  variant = 'light'
}) => {
  const baseStyles = variant === 'light' 
    ? "glass-panel bg-white/60 border-white/50" 
    : "glass-dark bg-white/5 border-white/10 text-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={hoverEffect ? { 
        y: -8, 
        boxShadow: variant === 'light' ? "0 20px 40px rgba(0,0,0,0.1)" : "0 20px 40px rgba(0,0,0,0.5)",
        borderColor: variant === 'light' ? "rgba(33, 142, 141, 0.3)" : "rgba(255, 255, 255, 0.2)"
      } : {}}
      className={`rounded-3xl p-8 ${baseStyles} ${className}`}
    >
      {children}
    </motion.div>
  );
};