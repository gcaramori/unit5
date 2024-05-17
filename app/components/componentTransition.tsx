'use client'

import { motion } from 'framer-motion'

export default function ComponentTransition({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, type: 'ease-in-out' }}
      className="w-full block relative"
    >
      {children}
    </motion.div>
  )
}
