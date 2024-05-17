/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ComponentTransition from './componentTransition'

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col justify-center items-start w-full h-auto pt-20 pb-8 md:pb-36 px-6 md:px-20 lg:px-32 2xl:px-44 bg-black"
    >
      <ComponentTransition>
        <h2 className="block relative text-5xl lg:text-6xl text-left font-bold text-white drop-shadow-lg">
          Testimonials
        </h2>

        <div className="flex justify-center items-center relative mt-32 w-full px-2 md:px-10 lg:px-0">
          <Swiper
            modules={[Navigation]}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 50,
              },
              968: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center p-8 rounded-lg drop-shadow-lg bg-yellow-600">
                <h2 className="block text-center text-xl md:text-2xl text-white drop-shadow-md mb-4">
                  Niamh Mitchell
                </h2>

                <div className="flex justify-center items-center gap-2 mb-6">
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                </div>

                <p className="block relative text-center text-md md:text-lg text-white drop-shadow-md">
                  I&apos;ve been training with Mick over 2 years now and it was
                  the greatest decision I ever made. Mick is fully invested in
                  every client he has ensuring they get 100% support from him
                  every session. He tailors the sessions to your goals and also
                  accommodates for any injuries or issues you might have. He is
                  not only an unreal trainer but keeps in touch throughout the
                  week to keep you motivated and on track. Would 100% recommend!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center p-8 rounded-lg drop-shadow-lg bg-yellow-600">
                <h2 className="block text-center text-xl md:text-2xl text-white drop-shadow-md mb-4">
                  Celine Kinch
                </h2>

                <div className="flex justify-center items-center gap-2 mb-6">
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                </div>

                <p className="block relative text-center text-md md:text-lg text-white drop-shadow-md">
                  I have been going to Unit 5 and Mick Byrne for 6 years now
                  could never go to any other gym or trainer now. Mick Byrne is
                  the best trainer out there always encouraging and checking in
                  with you to keep you motivated and he genuinely cares about
                  his clients. There is always an amazing atmosphere in the gym
                  too. He custom builds programs to suit your lifestyle and
                  goals. Not only is he an amazing trainer but a great friend
                  and counsellor 🤣Looking to invest in yourself then check out
                  Unit 5 and Mick Byrne you regret it
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center p-8 rounded-lg drop-shadow-lg bg-yellow-600">
                <h2 className="block text-center text-xl md:text-2xl text-white drop-shadow-md mb-4">
                  Darragh Keogh
                </h2>

                <div className="flex justify-center items-center gap-2 mb-6">
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                </div>

                <p className="block relative text-center text-md md:text-lg text-white drop-shadow-md">
                  Very affordable personal training. Mick is a 10/10 trainer who
                  keeps you motivated and always checking in with you wether to
                  check your progress or simply give you meal ideas. The mens
                  group sessions are always great where everyone gets along very
                  well.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center p-8 rounded-lg drop-shadow-lg bg-yellow-600">
                <h2 className="block text-center text-xl md:text-2xl text-white drop-shadow-md mb-4">
                  Charlene Reilly
                </h2>

                <div className="flex justify-center items-center gap-2 mb-6">
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                </div>

                <p className="block relative text-center text-md md:text-lg text-white drop-shadow-md">
                  I have been in unti5 the last 3 years traning with mick Byrne.
                  This man knows what he is talking about he has so much passion
                  for what he does has taught me so much aswell. Always there
                  for you no matter what & pushes you to always give 100% & to
                  believe in your self. I love the unit5 community everyone is
                  so friendly and always has each others back. Great gym all
                  round 5 stars from me 💪
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center p-8 rounded-lg drop-shadow-lg bg-yellow-600">
                <h2 className="block text-center text-xl md:text-2xl text-white drop-shadow-md mb-4">
                  Conor Guinan
                </h2>

                <div className="flex justify-center items-center gap-2 mb-6">
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                </div>

                <p className="block relative text-center text-md md:text-lg text-white drop-shadow-md">
                  Top people! Great atmosphere 24/7
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col justify-center items-center p-8 rounded-lg drop-shadow-lg bg-yellow-600">
                <h2 className="block text-center text-xl md:text-2xl text-white drop-shadow-md mb-4">
                  Stephen May
                </h2>

                <div className="flex justify-center items-center gap-2 mb-6">
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                  <p>⭐</p>
                </div>

                <p className="block relative text-center text-md md:text-lg text-white drop-shadow-md">
                  Unbelievable experience in the recovery room amazing staff and
                  exceptional facilities. 👏
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </ComponentTransition>
    </section>
  )
}
