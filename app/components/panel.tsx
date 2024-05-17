import Link from 'next/link'
import ComponentTransition from './componentTransition'

export default function Panel() {
  return (
    <div className="w-full h-screen bg-panel bg-no-repeat bg-top bg-cover block py-44 md:py-28 px-6 md:px-20 lg:px-32 2xl:px-44 2xl:py-48">
      <div className="block relative mb-18 md:mb-14 2xl:mb-16">
        <ComponentTransition>
          <h2 className="block relative text-5xl lg:text-8xl text-white font-bold drop-shadow-lg text-center md:text-left mb-4">
            Transforming <span className="text-yellow-500">Bodies</span>
          </h2>

          <h2 className="block relative text-5xl lg:text-8xl text-white font-bold drop-shadow-lg text-center md:text-left mb-4 2xl:mb-8">
            Empowering <span className="text-yellow-500">Lives</span>
          </h2>

          <p className="block relative text-xl text-gray-300 opacity-80 drop-shadow-md font-semibold text-center md:text-left max-w-xl">
            7+ years helping people build and develop strength, motor skills and
            coordination.
          </p>
        </ComponentTransition>
      </div>

      <div className="flex justify-start items-start text-center md:text-left">
        <ComponentTransition>
          <Link
            className="inline-block p-6 rounded-md drop-shadow-lg text-white font-bold text-xl bg-yellow-600 border-2 border-transparent transition-all hover:bg-transparent hover:border-yellow-600"
            href="https://api.whatsapp.com/send?phone=353858361425&text=Hey%2C%20i%20want%20to%20know%20about%20the%20plans%20and%20pricing!"
            target="_blank"
          >
            Get started
          </Link>
        </ComponentTransition>
      </div>
    </div>
  )
}
