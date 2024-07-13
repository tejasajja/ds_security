import Link from "next/link";

export const metadata = {
    title: 'DS Security',
    description: 'Page description',
}

export default function aboutus() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-t border-gray-800">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        {/*<div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach*/}
                        {/*    goals that matter</div>*/}
                        <h1 className="h2 mb-8">About Us</h1>
                        <p className="text-xl text-gray-200">
                            Founded by Dhanush Gowda (dagowda) and Sumanth Vankineni (bulmax9797), passionate cybersecurity
                            enthusiasts pursuing Masters in Cybersecurity at the University of Maryland, College Park,
                            DS Security was born out of a profound realization: the demand for top-notch penetration
                            testing skills far outweighs the available resources.
                        </p>

                        <h1 className="h2 mb-8"></h1>

                        <p className="text-xl text-gray-200">
                            Our mission is to bridge this gap, offering a comprehensive platform where aspiring ethical
                            hackers can hone their skills, challenge their limits, and ultimately become formidable
                            defenders of digital security. Drawing inspiration from our own journeys, including the
                            rigorous and rewarding pursuit of the OSCP (Offensive Security Certified Professional) and
                            CPTS (Certified Penetration Testing Specialist) certifications, we have curated a unique and
                            immersive learning experience.
                        </p>
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Connect With Us</h2>
                        <div className="mb-4">
                            <p className="text-lg text-gray-400 mb-2">Follow us on LinkedIn:</p>
                            <Link href="https://www.linkedin.com/in/dagowda/" target="_blank"
                               className="text-purple-600 hover:underline">
                                Dhanush Arvind (dagowda) Linkedin
                            </Link>
                            <br/>
                            <Link href="https://www.linkedin.com/in/svankine/" target="_blank"
                               className="text-purple-600 hover:underline">
                                Sumanth Vankineni (bulma) Linkedin
                            </Link>
                        </div>
                        <div>
                            <p className="text-lg text-gray-400 mb-2">For Hints DM Us On Discord:</p>
                            <Link href="https://discordapp.com/users/494186585890357263"
                                  className="text-purple-600 hover:underline" target="_blank">
                                Bulmax9797
                            </Link>
                            <br/>
                            <Link href="https://discordapp.com/users/845357562848215041"
                                  className="text-purple-600 hover:underline" target="_blank">
                                Dagowda
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}
