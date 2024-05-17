'use client'

import { useState, useEffect } from 'react'

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState<string>('')

  useEffect(() => {
    function getDimensions() {
      if (window.innerWidth <= 767) setDeviceType('mobile')
      else if (window.innerWidth <= 1022) setDeviceType('tablet')
      else setDeviceType('desktop')
    }

    if (typeof window !== 'undefined') {
      window.onresize = getDimensions

      getDimensions()
    }
  }, [])

  return deviceType
}

export default useDeviceType
