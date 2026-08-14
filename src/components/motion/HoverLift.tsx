"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type HoverLiftProps = {
  children: ReactNode;
  className?: string;
  scale?: number;
};

export default function HoverLift({ children, className = "", scale = 1.03 }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
