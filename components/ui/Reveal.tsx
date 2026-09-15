"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/cn";

type Props = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 22, ...props }: Props) {
  return (
    <motion.div
      {...props}
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.3, delay, ease: [0.2, 0.75, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
