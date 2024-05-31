'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ComponentTransition from './componentTransition'
import useGalleryMedia from '../hooks/useGalleryMedia'

export default function Gallery() {
  const media = useGalleryMedia()

  return (
    <section
      id="gallery"
      className="flex flex-col justify-center items-start w-full h-auto pt-20 pb-20 lg:pb-36 px-6 md:px-20 lg:px-32 2xl:px-44 bg-black"
    >
      <ComponentTransition>
        <h2 className="block relative text-6xl text-left font-bold text-white drop-shadow-lg">
          Our <span className="text-yellow-500">Gallery</span>
        </h2>

        <div className="block relative mt-20 w-full">
          <Swiper modules={[Navigation]} navigation spaceBetween={30}>
            {media?.map((file, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-lg">
                  {file.type === 'image' ? (
                    <Image
                      src={file.src}
                      alt={`${index}_image_gallery`}
                      width={600}
                      height={600}
                      style={{ objectFit: 'contain' }}
                    />
                  ) : (
                    <video
                      width="600"
                      height="600"
                      controls
                      preload="none"
                      autoPlay
                      loop
                      playsInline
                      muted
                    >
                      <source src={file.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ComponentTransition>
    </section>
  )
}
