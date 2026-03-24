'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: [0, 1], y: [20, 0] }}
      transition={{
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1], // Very slow, fluid, balanced curve
      }}
    >
      {children}
    </motion.div>
  )
}
