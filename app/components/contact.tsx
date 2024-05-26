'use client'

import { useState, useCallback } from 'react'
import ComponentTransition from './componentTransition'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ImSpinner8 } from 'react-icons/im'
import Modal from './modal'

interface IFormValues {
  name: string
  email: string
  phone: string
}

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormValues>()

  const onSubmit: SubmitHandler<IFormValues> = async (data: IFormValues) => {
    const email = await fetch('/api/sendEmail', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => res.json())

    if (email?.success) {
      setIsModalOpen(true)
    } else {
      console.log(email)
    }

    reset()
  }

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <h2 className="text-xl font-bold mb-10 font-roboto text-white drop-shadow-md">
          Awesome!
        </h2>
        <p className="font-roboto mb-1 text-center text-white drop-shadow-md">
          We&apos;ve received your email and we will contact you soon!
        </p>
      </Modal>

      <section
        id="contact"
        className="flex flex-col justify-center items-start w-full h-auto pt-20 pb-36 px-6 md:px-20 lg:px-32 2xl:px-44 bg-black"
      >
        <ComponentTransition>
          <h2 className="block relative text-5xl md:text-6xl text-left font-bold text-white drop-shadow-lg">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
        </ComponentTransition>

        <ComponentTransition>
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center mt-32 w-full">
            <div className="block relative w-full lg:w-1/2 mb-20 lg:mb-0">
              <div style={{ width: '100%' }}>
                <iframe
                  width="100%"
                  height="500px"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Inchicore,%20Dublin%208,%20D12%20C5PE,%20Irlanda+(Unit%205%20-%20Strength%20and%20Fitness)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                >
                  <a href="https://www.gps.ie/">gps tracker sport</a>
                </iframe>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-full lg:w-1/2 mx-2 md:mx-6 lg:mx-0 relative">
              <div className="block w-auto h-auto relative mb-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white text-center uppercase mb-6 2xl:max-w-md">
                  join us <span className="text-yellow-500">today!</span>
                </h2>
                <h3 className="text-xl text-white text-center">
                  Send a email and we contact you!
                </h3>
              </div>
              <div className="block relative w-auto md:w-[400px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="block py-6 relative">
                    <input
                      type="text"
                      id="name"
                      className="block p-4 bg-transparent border-b border-gray-200 text-white font-roboto mb-2 w-full placeholder:text-gray-100 focus:outline-0"
                      placeholder="Your name"
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please, type your name!',
                        },
                        minLength: {
                          value: 4,
                          message: 'Please, type your name correctly!',
                        },
                      })}
                    />
                    {errors.name && (
                      <span className="block mt-1 pl-3 text-sm text-white transition-all absolute bottom-[-8px] left-0">
                        {errors?.name?.message?.toString()}
                      </span>
                    )}
                  </div>
                  <div className="block py-6 relative">
                    <input
                      type="text"
                      id="email"
                      className="block p-4 bg-transparent border-b border-gray-200 text-white font-roboto mb-2 w-full placeholder:text-gray-100 focus:outline-0"
                      placeholder="Your email"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'Please, type your email!',
                        },
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Please, type your email correctly!',
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="block mt-1 pl-3 text-sm text-white transition-all absolute bottom-[-8px] left-0">
                        {errors?.email?.message?.toString()}
                      </span>
                    )}
                  </div>
                  <div className="block py-6 relative">
                    <input
                      type="text"
                      id="phone"
                      className="block p-4 bg-transparent border-b border-gray-200 text-white font-roboto mb-2 w-full placeholder:text-gray-100 focus:outline-0"
                      placeholder="Your phone"
                      {...register('phone', {
                        required: {
                          value: true,
                          message: 'Please, type your phone!',
                        },
                      })}
                    />
                    {errors.phone && (
                      <span className="block mt-1 pl-3 text-sm text-white transition-all absolute bottom-[-8px] left-0">
                        {errors?.phone?.message?.toString()}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="p-4 mt-10 text-xl text-white font-bold flex justify-center items-center w-full uppercase bg-yellow-600 border-2 border-transparent transition-all hover:bg-transparent hover:border-yellow-600"
                  >
                    {isSubmitting ? (
                      <span className="h-auto w-auto inline-block text-white animate-spin transition-all mr-2">
                        <ImSpinner8 size="1.2rem" />
                      </span>
                    ) : (
                      ''
                    )}
                    <span>send</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </ComponentTransition>
      </section>
    </>
  )
}
