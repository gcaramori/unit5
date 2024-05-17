'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ComponentTransition from './componentTransition'
import useGalleryImages from '../hooks/useGalleryImages'

export default function Gallery() {
  const images = useGalleryImages()

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
            {images?.map((image, index) => {
              return (
                image !== '' && (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${index}_image_gallery`}
                        width={600}
                        height={600}
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                  </SwiperSlide>
                )
              )
            })}
          </Swiper>
        </div>
      </ComponentTransition>
    </section>
  )
}
