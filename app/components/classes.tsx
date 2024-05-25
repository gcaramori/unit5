import Image from 'next/image'
import ComponentTransition from './componentTransition'

export default function Classes() {
  return (
    <section
      id="packages"
      className="flex flex-col justify-center items-start w-full h-auto pt-20 pb-16 lg:pb-26 px-6 md:px-20 lg:px-32 2xl:px-44 bg-black"
    >
      <ComponentTransition>
        <h2 className="block relative text-5xl lg:text-6xl text-center md:text-left font-bold text-white drop-shadow-lg">
          Packages to suit everyone&apos;s
          <span className="text-yellow-500"> budgets and goals</span>
        </h2>
      </ComponentTransition>

      <div className="flex justify-center items-center relative mt-32 w-full">
        <ComponentTransition>
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 grid-rows-3 md:grid-rows-2 place-items-center items-start gap-10 md:gap-24 xl:gap-20">
            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/one-to-one.png"
                alt="one-to-one"
              />

              <h2 className="block text-center text-3xl font-bold drop-shadow-md text-white">
                One-to-one coaching
              </h2>

              <div>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Work closely with a highly qualified coach with our one to one
                  Personal Training Package:
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Nutrition plan ✅️
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  2 week check ins ✅️
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Progressive training ✅️
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Coaching app ✅️
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Coaching accountability app ✅️
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/semi-private.png"
                alt="semi-private"
              />

              <h2 className="block text-center text-3xl font-bold drop-shadow-md text-white">
                Semi private coaching
              </h2>

              <div>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Join a Group of like minded individuals for in house training
                  sessions with a coach, get personal trained for a fraction of
                  the cost, check ins every 2 weeks to ensure progress. Have a
                  coach assess and adjust when needed on your journey with us,
                  have coach manage and monitor not only your in house training
                  but your activity, steps, daily tasks, nutrition, sleep all
                  with our coaching app.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/mens-weight.png"
                alt="mens-weight"
              />

              <h2 className="block text-center text-3xl font-bold drop-shadow-md text-white">
                Men&apos;s and woman&apos;s weight classes
              </h2>

              <div>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Its a 12 week progressive weight lifting program training is 3
                  days per week: tuesday 7pm, thursday 7pm and friday 7pm. Our
                  program is geared towards people looking to gain massive
                  strength and put on some muscle in the process.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/mixed-conditioning.png"
                alt="mixed-conditioning"
              />

              <h2 className="block text-center text-3xl font-bold drop-shadow-md text-white">
                Metcon classes
              </h2>

              <div>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Our classes are combination of strength and conditioning
                  workouts, which is an effective way to burn calories and torch
                  body fat without losing muscle mass. Metcon club what
                  we&apos;re about is Engine Building, igniting your FatLoss
                  efforts and getting fitter!! Research has shown that MetCon
                  and HIIT style workouts result in less muscle loss when
                  compared to longer LIT (low intensity training) training
                  sessions that burn similar calories. Metcons are
                  beginner-friendly and beneficial to those who their way around
                  the gym.
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Get Leaner / Fitter / Stronger ✅️
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Small Class Setting ✅️
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Supportive Group Environment ✅️
                </p>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  3 Classes a week for 4 weeks ✅️
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image width="100" height="100" src="/online.png" alt="online" />

              <h2 className="block text-center text-3xl font-bold drop-shadow-md text-white">
                Online coaching
              </h2>

              <div>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  Join our team with our online experience. Our very own
                  Accountability app managed and monitored by myself to keep you
                  on the road to your goals. Check ins every 2 weeks, sync your
                  devices/nutriton apps such as Watch and My Fitness Pal to our
                  online app to get the most out of your training.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-6">
              <Image
                width="100"
                height="100"
                src="/disabilities.png"
                alt="inclusions"
              />

              <h2 className="block text-center text-3xl font-bold drop-shadow-md text-white">
                Inclusion classes
              </h2>

              <div>
                <p className="block text-md lg:text-lg drop-shadow-sm text-white text-center mb-2">
                  This year we celebrate our 7th year of our inclusion program.
                  7 years ago we set up classes for adults with additional needs
                  and disabilities, from zoom classes, in house training to on
                  site training. We have seen numbers grow along with the
                  progress made not only physically but mentally.
                </p>
              </div>
            </div>
          </div>
        </ComponentTransition>
      </div>
    </section>
  )
}
