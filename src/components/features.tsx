import Image from 'next/image'
import Link from 'next/link'

export default function Features() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Standalone Machines</h2>
            <p className="text-xl text-gray-400">Welcome to our curated selection of standalone machines, each carefully engineered to challenge cybersecurity enthusiasts. Every machine offers a detailed exploration of specific vulnerabilities, complete with comprehensive walkthroughs that clarify their complexities. </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up"
                 data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/alpha">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/alpha.jpg" alt="Your Image" className="w-64 h-64 mb-4"/>
              </Link>
              <Link href="/alpha">
                <h4 className="h4 mb-2 hover:text-purple-600">
                  Machine Alpha
                </h4>
              </Link>
              {/*<h4 className="h4 mb-2">Machine Alpha</h4>*/}
              <p className="text-lg text-gray-400 text-center">Mind Bender: Launch into the cyber realm with Machine Alpha,
                where technology meets simplicity.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/head2">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/head2.jpg" alt="Your Image" className="w-64 h-64 mb-4"/>
              </Link>
              <Link href="/head2">
                <h4 className="h4 mb-2 hover:text-purple-600">
                  Machine Head2
                </h4>
              </Link>
              {/*<h4 className="h4 mb-2">Machine Head2</h4>*/}
              <p className="text-lg text-gray-400 text-center">No Sweat: Delve into Machine Head2, a nexus of
                mystical codes and hidden secrets.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                 data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/bugatti">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/bugatti.jpg" alt="Your Image" className="w-64 h-64 mb-4"/>
              </Link>
              <Link href="/bugatti">
                <h4 className="h4 mb-2 hover:text-purple-600">
                  Machine Bugatti
                </h4>
              </Link>
              {/*<h4 className="h4 mb-2">Machine Bugatti</h4>*/}
              <p className="text-lg text-gray-400 text-center">Medium Ground: Navigate the fast lanes of digital security
                with Machine Bugatti, where speed meets challenge.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300"
                 data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/skyline">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/skyline.jpg" alt="Your Image" className="w-64 h-64 mb-4"/>
              </Link>
              <Link href="/skyline">
                <h4 className="h4 mb-2 hover:text-purple-600">
                  Machine Skyline
                </h4>
              </Link>
              {/*<h4 className="h4 mb-2">Machine Skyline</h4>*/}
              <p className="text-lg text-gray-400 text-center">Mind Bender: Accelerate your hacking prowess with
                Machine Skyline, where precision meets cyber strategy.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400"
                 data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/beerus">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/beerus.png" alt="Your Image" className="w-64 h-64 mb-4"/>
              </Link>
              <Link href="/beerus">
                <h4 className="h4 mb-2 hover:text-purple-600">
                  Machine Beerus
                </h4>
              </Link>
              {/*<h4 className="h4 mb-2">Machine Beerus</h4>*/}
              <p className="text-lg text-gray-400 text-center">No Sweat: Confront the ultimate power of Machine
                Beerus in a battle of wits and strategy.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500"
                 data-aos-anchor="[data-aos-id-blocks]">
              <Link href="/koenigsegg">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/koenigsegg.jpg" alt="Your Image" className="w-64 h-64 mb-4"/>
              </Link>
              <Link href="/koenigsegg">
                <h4 className="h4 mb-2 hover:text-purple-600">
                  Machine Koenigsegg
                </h4>
              </Link>
              {/*<h4 className="h4 mb-2">Instant Features!!</h4>*/}
              <p className="text-lg text-gray-400 text-center">Mind Bender: Boost your hacking skills with Machine Koenigsegg, where precision and cyber strategy converge.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
