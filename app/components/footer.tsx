import Link from 'next/link'
import Image from 'next/image'
import { AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 2xl:pt-24 pb-6 px-10 md:px-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-12">
        <div className="flex flex-col justify-center items-center lg:items-start relative">
          <div className="h-24 w-24 block relative mb-6 mx-auto md:mx-0">
            <Image src="/logo.png" alt="logo_footer" width={100} height={100} />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start font-roboto">
          <h3 className="text-lg font-bold mb-2 text-center md:text-left">
            Location
          </h3>

          <p className="text-md md:text-sm text-center md:text-left">
            Unit 5B, Motorcity Kylemore Road
          </p>
          <p className="text-md md:text-sm text-center md:text-left">
            Dublin, Ireland
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start font-roboto">
          <h3 className="text-lg font-bold mb-2 text-center md:text-left">
            Contact us
          </h3>

          <p className="text-md md:text-sm text-center md:text-left">
            Phone: (+353) 085 836 1425
          </p>
          <p className="text-md md:text-sm text-center md:text-left">
            Email: unit5strengthandfitness@gmail.com
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start font-roboto">
          <h3 className="text-lg font-bold mb-2 text-center md:text-left">
            Schedule
          </h3>

          <p className="text-md md:text-sm text-center md:text-left">
            Monday - Friday: 9am - 9pm
          </p>
          <p className="text-md md:text-sm text-center md:text-left">
            Saturday: 8am - 12am
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start font-roboto">
          <h3 className="text-lg font-bold mb-2 text-center md:text-left">
            Follow us
          </h3>

          <div className="flex justify-start items-center gap-2">
            <Link
              href="https://www.instagram.com/mick_byrne_unit5/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <AiFillInstagram size="1.5em" />
            </Link>

            <Link
              href="https://www.facebook.com/profile.php?id=100063642996519"
              target="_blank"
              rel="noreferrer"
              title="Facebook"
            >
              <FaFacebook size="1.5em" />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 md:mt-10">
        <p className="text-md md:text-sm">
          &copy; 2024 Unit 5 - Strenght and Fitness. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
