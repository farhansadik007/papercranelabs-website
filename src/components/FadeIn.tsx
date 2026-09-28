"use client";
import { motion } from "framer-motion";
import { useRef, ReactNode } from "react";
import { useInView } from "framer-motion";

interface FadeInProps { children: ReactNode; delay?: number; className?: string; }

export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}>
      {children}
    </motion.div>
  );
}
