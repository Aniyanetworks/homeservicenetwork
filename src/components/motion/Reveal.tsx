"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  from?: "left" | "right";
};

export default function Reveal({ children, className = "", delay = 0, from }: RevealProps) {
  const initial =
    from === "left"
      ? { opacity: 0, x: -48 }
      : from === "right"
        ? { opacity: 0, x: 48 }
        : { opacity: 0 };

  const animate = from ? { opacity: 1, x: 0 } : { opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
