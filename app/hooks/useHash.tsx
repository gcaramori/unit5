import { useState, useEffect } from 'react'

const useHash = () => {
  const [hash, setHash] = useState<string>(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return hash
}

export default useHash
