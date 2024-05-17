'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import useHash from '../hooks/useHash'
import useScrollPosition from '../hooks/useScrollPosition'
import useDeviceType from '../hooks/useDeviceType'
import ComponentTransition from './componentTransition'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

export default function Navbar() {
  const hash = useHash()
  const scrollPosition = useScrollPosition()
  const deviceType = useDeviceType()

  const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false)

  const handleOpenNavbar = useCallback(() => {
    setIsNavbarOpen((isNavbarOpen) => !isNavbarOpen)
  }, [])

  return (
    <>
      <ComponentTransition>
        <nav
          data-fixed={scrollPosition > 50}
          className="relative data-[fixed=true]:fixed data-[fixed=true]:bg-black top-0 flex justify-between items-center w-full py-0 md:py-4 px-8 md:px-14 z-30 bg-transparent transition-all"
        >
          <div className="block relative">
            <Image src="/logo.png" alt="Logo" height={70} width={70} priority />
          </div>

          {deviceType !== 'mobile' ? (
            <ul className="flex justify-center items-center gap-8 list-none text-white font-semibold text-lg drop-shadow-sm">
              <li
                data-active={!hash || hash === '#'}
                className="transition-all hover:opacity-80 py-3 data-[active=true]:border-b-4 data-[active=true]:border-yellow-600"
              >
                <a href="#">Home</a>
              </li>
              <li
                data-active={hash === '#classes'}
                className="transition-all hover:opacity-80 py-3 data-[active=true]:border-b-4 data-[active=true]:border-yellow-600"
              >
                <a href="#classes">Classes</a>
              </li>
              <li
                data-active={hash === '#services'}
                className="transition-all hover:opacity-80 py-3 data-[active=true]:border-b-4 data-[active=true]:border-yellow-600"
              >
                <a href="#services">Services</a>
              </li>
              <li
                data-active={hash === '#testimonials'}
                className="transition-all hover:opacity-80 py-3 data-[active=true]:border-b-4 data-[active=true]:border-yellow-600"
              >
                <a href="#testimonials">Testimonials</a>
              </li>
              <li
                data-active={hash === '#contact'}
                className="transition-all hover:opacity-80 py-3 data-[active=true]:border-b-4 data-[active=true]:border-yellow-600"
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          ) : (
            <div className="relative block">
              <button
                className="inline-block p-4 text-white drop-shadow-md z-40"
                onClick={handleOpenNavbar}
              >
                <GiHamburgerMenu size="1.5em" />
              </button>
            </div>
          )}
        </nav>
      </ComponentTransition>

      <div
        data-open={isNavbarOpen}
        className="block fixed top-0 right-0 w-4/5 h-full transition-all bg-yellow-600 opacity-0 z-0 data-[open=true]:z-50 translate-x-[100%] data-[open=true]:translate-x-0 data-[open=true]:opacity-100 py-8"
      >
        <button
          className="absolute top-2 right-4 z-50 text-white text-2xl font-bold"
          onClick={handleOpenNavbar}
        >
          <IoMdClose size="1.5em" />
        </button>

        <ul className="flex flex-col justify-start items-center w-full h-full">
          <li
            data-active={!hash || hash === '#'}
            className="block w-full text-white font-bold text-xl text-center font-bo transition-all py-2 px-4 bg-yellow-600 data-[active=true]:bg-black"
          >
            <a href="#">Home</a>
          </li>
          <li
            data-active={hash === '#classes'}
            className="block w-full text-white font-bold text-xl text-center font-bo transition-all py-2 px-4 bg-yellow-600 data-[active=true]:bg-black"
          >
            <a href="#classes">Classes</a>
          </li>
          <li
            data-active={hash === '#services'}
            className="block w-full text-white font-bold text-xl text-center font-bo transition-all py-2 px-4 bg-yellow-600 data-[active=true]:bg-black"
          >
            <a href="#services">Services</a>
          </li>
          <li
            data-active={hash === '#testimonials'}
            className="block w-full text-white font-bold text-xl text-center font-bo transition-all py-2 px-4 bg-yellow-600 data-[active=true]:bg-black"
          >
            <a href="#testimonials">Testimonials</a>
          </li>
          <li
            data-active={hash === '#contact'}
            className="block w-full text-white font-bold text-xl text-center font-bo transition-all py-2 px-4 bg-yellow-600 data-[active=true]:bg-black"
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  )
}
