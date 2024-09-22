import React from "react";
import bg from "../assets/bg2.jpg"

export default function About() {
    return (
        <section class="pb-10 bg-white" id="aboutus">
            <div class="container mx-auto px-4">
                <div class="flex flex-col items-center justify-center space-y-8">
                    <h2 class="text-4xl font-bold text-center text-primary">Who are we?</h2>
                    <p class="text-gray-600 text-md text-center max-w-2xl"> The IEEE IAS Chapter at SLIIT is a dynamic community of passionate individuals committed to advancing the field of Industry Applications within the Sri Lanka Institute of Information Technology. Working in alignment with the mission, vision, and core values of the IEEE Industry Applications Society, the IAS chapter at SLIIT serves as a platform for undergraduates, graduates, researchers and industry professionals to come together, collaborate, and contribute to technology by linking research to practice
                    </p>
                </div>
            </div>

            <div class="container mx-auto px-4 mt-16">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-200 rounded-xl">
                        <h3 class="text-3xl font-bold text-primary">Our Vision</h3>
                        <p class="text-gray-600 text-md text-center">Fostering a culture of innovation and excellence in the realm of Industry Applications, we aspire to be a driving force that empowers individuals to push the boundaries of technology, creating solutions that have a transformative, lasting and positive impact on industries and society as a whole.
                        </p>
                    </div>

                    <div class="flex flex-col items-center justify-center space-y-6 p-10 bg-gray-200 rounded-xl">
                        <h3 class="text-3xl font-bold text-primary">Our Mission</h3>
                        <p class="text-gray-600 text-md text-center">We aim to cultivate a community that not only excels in academic and professional endeavors but also actively contributes to the positive transformation of industries through technological innovation, by facilitating knowledge sharing, industry collaboration, skill development, community engagement and ethical practices
                        </p>
                    </div>
                </div>

            </div>
            <div className="my-20 w-full mx-auto">
                <div className="relative grid gap-10 md:px-40 sm:px-32  max-[640px]:px-14 bg-cover filter " style={{ backgroundImage: `url(${bg})` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-green-950"></div>
                    <div className="relative z-10">
                        <h3 className="text-3xl font-bold text-white text-center py-10">Join Us</h3>
                        <p className="text-center pb-10 text-md text-white">Game changer for you!! Joining IAS creates a significant impact in your personal and professional development. Here in IAS, you will be able to contribute, collaborate and make positive changes that can impact the industry and society. </p>
                        {/* <ul className="text-white py-10 border flex flex-col max-w-fit">
                            <li>Enhancing your Knowledge</li>
                            <li>Networking Opportunities</li>
                            <li>Skill Development</li>
                            <li>Leadership and Contribution</li>
                            <li>Technological Advancements</li>
                            <li>Standards and Best Practices</li>
                        </ul> */}
                    </div>
                </div>
            </div>


        </section>
    )
}