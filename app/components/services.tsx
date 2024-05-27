import Image from 'next/image'
import ComponentTransition from './componentTransition'

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col justify-center items-start w-full h-auto pt-20 pb-36 px-6 md:px-20 lg:px-32 2xl:px-44 bg-black"
    >
      <ComponentTransition>
        <h2 className="block relative text-5xl lg:text-6xl text-center md:text-left font-bold text-white drop-shadow-lg">
          Why Join With <span className="text-yellow-500">Us?</span>
        </h2>
      </ComponentTransition>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start relative mt-32 w-full">
        <ComponentTransition>
          <ul
            id="benefits"
            className="flex flex-col justify-start items-start gap-10 list-disc text-white px-4 md:px-0 mb-20 lg:mb-0"
          >
            <li className="text-3xl md:text-4xl block text-left font-bold text-white drop-shadow-md">
              Classes for everyone
            </li>
            <li className="text-3xl md:text-4xl block text-left font-bold text-white drop-shadow-md">
              Personalized Training
            </li>
            <li className="text-3xl md:text-4xl block text-left font-bold text-white drop-shadow-md">
              Qualified Staff
            </li>
            <li className="text-3xl md:text-4xl block text-left font-bold text-white drop-shadow-md">
              Flexible Membership Options
            </li>
            <li className="text-3xl md:text-4xl block text-left font-bold text-white drop-shadow-md">
              Specialized Programs
            </li>
            <li className="text-3xl md:text-4xl block text-left font-bold text-white drop-shadow-md">
              Community Atmosphere
            </li>
          </ul>
        </ComponentTransition>

        <ComponentTransition>
          <div className="block relative my-auto overflow-hidden rounded-lg">
            <Image src="/services.jpeg" alt="gym" width={600} height={600} />
          </div>
        </ComponentTransition>
      </div>
    </section>
  )
}
