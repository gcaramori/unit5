'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="bg-yellow-600 p-6 rounded-lg shadow-lg w-96 z-50"
            onClick={handleModalClick}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: 'ease-in-out' }}
          >
            <button
              className="absolute top-2 right-2 text-gray-100 hover:text-gray-300"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            {children}
            <button
              className="relative block mt-10 max-w-sm py-2 px-4 text-md text-white shadow-md bg-black text-center font-roboto font-semibold rounded-md mx-auto transition-all hover:opacity-80"
              onClick={onClose}
            >
              Ok!
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
