import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unit5 - Strength and Fitness',
  description:
    "Welcome to Unit5, where we're dedicated to helping you achieve your fitness goals. Join us for a variety of classes and personalized training programs designed to enhance your fitness journey. Start your transformation today!",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
