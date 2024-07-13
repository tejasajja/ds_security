import Image from 'next/image';
export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Dive Deep into Penetration Testing Skills</h1>
            <p className="text-xl text-gray-400">Immerse yourself in our immersive environment where learning merges
              with hands-on experience. Whether you&apos;re an experienced penetration tester or just starting out, our
              platform provides the tools and knowledge necessary to navigate the dynamic landscape of cybersecurity
              effectively.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/standalone2.jpg" alt="Your Image" className="max-w-full mx-auto md:max-w-none h-auto" width={540} height={405}/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Active</div>
                  <h3 className="h3 mb-3">Standalone Machines</h3>
                  <p className="text-xl text-gray-400 mb-4">Our platform features a dedicated section that delves into
                    the nuances of each vulnerability, offering a thorough breakdown of its nature, potential exploits,
                    and mitigation strategies. Through step-by-step guidance, users gain valuable insights into the
                    anatomy of vulnerabilities, empowering them to comprehend not only their manifestations but also
                    effective defense mechanisms.</p>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl"
                   data-aos="fade-up">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/active-directory-chain.jpg" alt="Your Image" className="max-w-full mx-auto md:max-w-none h-auto"
                     width={540} height={405}/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Coming Soon</div>
                  <h3 className="h3 mb-3">Active Directory Chain</h3>
                  <p className="text-xl text-gray-400 mb-4">Explore our Active Directory Machine Chain — a challenging
                    network of interconnected machines with vulnerabilities. Test your skills by navigating and securing
                    this complex environment!</p>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                  className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                  data-aos="fade-up">
                <Image src="https://ds-security-web.s3.amazonaws.com/ui/media/images/comingsoon.gif" alt="Your Image" className="max-w-full mx-auto md:max-w-none h-auto"
                     width={540} height={405}/>
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2">Coming Soon</div>
                  <h3 className="h3 mb-3">Spinning the Machines</h3>
                  <p className="text-xl text-gray-400 mb-4">We&apos;re enhancing your experience!
                    Soon, you&apos;ll be able to spin up machines directly through our website, eliminating the need to
                    download OVA files. Get ready for a seamless and efficient hacking practice session!</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
