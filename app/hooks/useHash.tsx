import { useState, useEffect } from 'react'

const useHash = () => {
  const [hash, setHash] = useState<string>('')

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('hashchange', handleHashChange)
      return () => {
        window.removeEventListener('hashchange', handleHashChange)
      }
    }
  }, [])

  return hash
}

export default useHash
