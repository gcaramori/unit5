import Image from 'next/image'
import ComponentTransition from './componentTransition'

export default function Classes() {
  return (
    <section
      id="classes"
      className="flex flex-col justify-center items-start w-full h-auto pt-20 pb-20 lg:pb-36 px-6 md:px-20 lg:px-32 2xl:px-44 bg-black"
    >
      <ComponentTransition>
        <h2 className="block relative text-5xl lg:text-6xl text-center md:text-left font-bold text-white drop-shadow-lg">
          Classes <span className="text-yellow-500">Available</span>
        </h2>
      </ComponentTransition>

      <div className="flex justify-center items-center relative mt-32 w-full">
        <ComponentTransition>
          <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 place-items-center gap-10 md:gap-24 xl:gap-44">
            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/one-to-one.png"
                alt="one-to-one"
              />

              <h3 className="block text-center text-xl lg:text-2xl drop-shadow-md text-white">
                One-to-one coaching
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/semi-private.png"
                alt="semi-private"
              />

              <h3 className="block text-center text-xl lg:text-2xl drop-shadow-md text-white">
                Semi private coaching
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/mens-weight.png"
                alt="mens-weight"
              />

              <h3 className="block text-center text-xl lg:text-2xl drop-shadow-md text-white">
                Men&apos;s weight only classes
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/mixed-conditioning.png"
                alt="mixed-conditioning"
              />

              <h3 className="block text-center text-xl lg:text-2xl drop-shadow-md text-white">
                Mixed conditioning classes
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image width="100" height="100" src="/online.png" alt="online" />

              <h3 className="block text-center text-xl lg:text-2xl drop-shadow-md text-white">
                Online classes
              </h3>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/disabilities.png"
                alt="inclusions"
              />

              <h3 className="block text-center text-xl lg:text-2xl drop-shadow-md text-white">
                Inclusion classes
              </h3>
            </div>
          </div>
        </ComponentTransition>
      </div>
    </section>
  )
}
