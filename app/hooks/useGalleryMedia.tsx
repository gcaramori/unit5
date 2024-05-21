import { useState, useEffect } from 'react'

type MediaFile = {
  type: string
  src: string
}

const useGalleryMedia = () => {
  const [mediaFiles, setMediaFiles] = useState<MediaFile[]>([])

  useEffect(() => {
    const fetchMediaFiles = async () => {
      const response = await fetch('/api/gallery')
      const files: string[] = await response.json()

      const mediaFiles = files.map((file) => {
        const type = /\.(jpg|jpeg|png)$/i.test(file) ? 'image' : 'video'
        return {
          type,
          src: `/gallery/${file}`,
        }
      })

      setMediaFiles(mediaFiles.sort(() => Math.random() - 0.5))
    }

    fetchMediaFiles()
  }, [])

  return mediaFiles
}

export default useGalleryMedia
