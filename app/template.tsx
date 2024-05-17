'use client'

import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="show"
      transition={{ duration: 2, type: 'ease-in-out' }}
    >
      {children}
    </motion.main>
  )
}
