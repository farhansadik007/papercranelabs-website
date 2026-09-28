"use client";
import { motion } from "framer-motion";

interface OrigamiCraneLogoProps {
  className?: string;
  strokeWidth?: number;
  animated?: boolean;
}

export function OrigamiCraneLogo({
  className = "w-full h-full",
  strokeWidth = 16,
  animated = false,
}: OrigamiCraneLogoProps) {
  const content = (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Tail / Right Wing (Back facet) */}
        <polygon
          points="285,255 422,82 375,368"
          fill="white"
        />

        {/* Center Peak / Middle Wing */}
        <polygon
          points="175,190 222,80 285,255"
          fill="white"
        />

        {/* Neck and Chest */}
        <polygon
          points="125,166 175,190 220,270 168,288"
          fill="white"
        />

        {/* Beak */}
        <polygon
          points="125,166 60,215 120,205"
          fill="white"
        />

        {/* Bottom Left Triangular Fold */}
        <polygon
          points="135,378 168,288 206,378"
          fill="white"
        />

        {/* Front Fold Diamond - Upper Half */}
        <polygon
          points="260,236 175,300 375,368"
          fill="white"
        />

        {/* Front Fold Diamond - Lower Half */}
        <polygon
          points="175,300 248,460 375,368"
          fill="white"
        />

        {/* Structural Crease Lines */}
        {/* Neck down to base */}
        <line x1="125" y1="166" x2="135" y2="378" />
        {/* Base horizontal */}
        <line x1="135" y1="378" x2="206" y2="378" />
        {/* Center fold crease across front diamond */}
        <line x1="175" y1="300" x2="375" y2="368" />
      </g>
    </svg>
  );

  if (!animated) {
    return content;
  }

  return (
    <motion.div
      animate={{
        y: [0, -6, 0],
        rotate: [0, 1.5, 0, -1, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="inline-flex items-center justify-center origin-center"
    >
      {content}
    </motion.div>
  );
}
