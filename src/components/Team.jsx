import React from "react";
import Profile from "../assets/profile.jpg";
import Aathil from '../assets/Aathil Ahmeth - Chair.jpg'
import Meraj from '../assets/Meraj Wanigasekara_Vice Chair.jpg'
import Chathumini from '../assets/Chathumini Nimasha - Secretary.jpg'
import Himash from '../assets/Himash Jayasinghe - Treasurer.jpg'
import Ramudu from '../assets/Ramudu Welikala - Chairperson.jpg'
import Hafsa from '../assets/Hafsa Zainab - Vice-Chair.jpg'
import Ruwanya from '../assets/Ruwanya Athukorala - Secratary.jpg'

export default function Team() {
    return (
        <>
            <section class="max-w-screen-2xl px-10 mx-auto mb-20">
                <h1 class="mb-8 text-center font-sans text-4xl font-bold text-primary">Chapter Advisor<span class="text-black">.</span></h1>
                {/* <p class=" text-gray-600 text-md text-center max-w mb-10"></p> */}
                <div class="mx-auto flex align-middle justify-center">
                    <article class="w-full md:w-[800px] md:items-center md:flex grid rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <div class="relative md:w-1/2 flex items-end overflow-hidden rounded-xl">
                            <img src={Profile} alt="Hotel Photo" className="w-full " />

                        </div>

                        <div class="mt-1 p-2 md:p-10">
                            <h2 class="text-gray-900 font-semibold text-lg">Prof. Anuradha Jayakody</h2>
                            <p class="text-primary mt-1 text-sm font-semibold ">Head/Department of Computer Systems Engineering, Faculty of Computing-SLIIT</p>


                        </div>
                    </article>
                </div>
            </section>
            <section class="max-w-screen-2xl px-10 mx-auto mb-32">

                <h1 class="my-3 text-center font-sans text-4xl font-bold text-primary">Current executive board<span class="text-black">.</span></h1>
                <p class=" text-gray-600 text-md text-center max-w mb-10">The Executive Board of IEEE WIE Affinity Group 2023/24 of SLIIT.</p>

                <div class="mx-auto mb-14 grid max-w-screen-xl grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="https://www.linkedin.com/in/yashodha-athapattu-883228235/">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Ramudu} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Ramudu Welikala</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Chairperson</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="https://www.linkedin.com/in/imethmakariyawasam">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Hafsa} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Hafsa Zainab</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Vice Chairperson</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="http://www.linkedin.com/in/owadibandara">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Ruwanya} alt="Hotel Photo" className="w-full" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Ruwanya Athukorala </h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Secretary</p>


                            </div>
                        </a>
                    </article>


                </div>

                <h1 class="my-3 text-center font-sans text-4xl font-bold text-primary">Past executive board<span class="text-black">.</span></h1>
                <p class=" text-gray-600 text-md text-center max-w mb-10">Recognizing the Past Executive Committee Members of IEEE IAS Group 2022/23  of SLIIT, whose dedication and leadership paved the way for our organization's success.</p>
                <div class="mx-auto grid  grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-4">
                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Aathil} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Aathil Ahmeth</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Chairperson</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Meraj} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Meraj Wanigasekara</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Vice Chairperson</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Chathumini} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Chathumini Nimasha</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Secretary</p>


                            </div>
                        </a>
                    </article>

                    <article class="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
                        <a href="#">
                            <div class="relative flex items-end overflow-hidden rounded-xl">
                                <img src={Himash} alt="Hotel Photo" />

                            </div>

                            <div class="mt-1 p-2">
                                <h2 class="text-gray-900 font-semibold text-lg">Himash Jayasinghe</h2>
                                <p class="text-primary mt-1 text-md font-semibold ">Treasurer</p>


                            </div>
                        </a>
                    </article>

                </div>


            </section>

        </>

    )
}