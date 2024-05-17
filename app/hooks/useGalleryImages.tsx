import { useState, useEffect } from 'react'

const useGalleryImages = () => {
  const [images, setImages] = useState<Array<string>>([''])

  useEffect(() => {
    const imagesArray = []

    for (let i = 1; i < 11; i++) {
      imagesArray.push(`/gallery/${i}.jpg`)
    }

    setImages(imagesArray)
  }, [])

  return images
}

export default useGalleryImages
