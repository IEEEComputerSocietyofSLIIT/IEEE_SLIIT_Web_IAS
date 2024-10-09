import React from "react";
import logo from "../assets/IAS.png";

export default function Contact() {
    return (
        <>
            <section className="bg-gradient-to-t from-black to-primary relative " id="contact">
                <div className="custom-shape-divider-top-1721222845">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="white" fill="white"></path>
                    </svg>
                </div>

                <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10">
                    <div className="mb-4">
                        <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                            <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                                Contact
                            </p>
                            <h2
                                className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                Get in Touch
                            </h2>
                        </div>
                    </div>

                    <div className="flex items-stretch justify-center">
                        <div className="grid md:grid-cols-2">
                            <div className="h-full pr-6">
                                <p className="mt-3 mb-6 text-lg text-gray-300 ">
                                    We're here to support you. Reach out with any questions about our events, membership, or initiatives.
                                </p>
                                <ul className="mb-6 md:mb-0">
                                    <li className="flex items-center mb-8">
                                        <div class="flex items-center justify-center gap-x-5 ">
                                            <a href="https://www.linkedin.com/company/ieee-industry-applications-society-of-sliit/" aria-label="Find us on LinkedIn"
                                                target="_blank" rel="noopener">
                                                <svg class="h-6 w-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                                                        fill="currentColor"></path>
                                                </svg>

                                            </a>
                                        
                                            <a href="https://web.facebook.com/IASSLIIT" aria-label="Find us on Facebook" target="_blank"
                                                rel="noopener">
                                                <svg class="h-6 w-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                                                        fill="currentColor"></path>
                                                </svg>

                                            </a>
                                            <a href="https://www.instagram.com/ias_sliit/https://www.linkedin.com/company/ieee-industry-applications-society-of-sliit" aria-label="Find us on Instagram" target="_blank"
                                                rel="noopener">
                                                <svg class="h-6 w-6 text-white" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                                                        fill="currentColor"></path>
                                                    <path
                                                        d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                                                        fill="currentColor"></path>
                                                </svg>

                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">IEEE Membership Redirect</h3>

                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className=" text-lg font-medium leading-6 text-gray-900 dark:text-white">IEEE IAS Membership Redirect</h3>

                                        </div>
                                    </li>
                                    <li className="flex items-center mb-4">
                                        <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe"><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" /><path d="M2 12h20" /></svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className=" text-lg font-medium leading-6 text-gray-900 dark:text-white">Join IEEE IAS of SLIIT</h3>

                                        </div>
                                    </li>
                                    <li>
                                        <p><iframe className="rounded-xl w-full md:w-2/3" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d126745.6272212363!2d79.829906!3d6.9143985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae256db1a6771c5%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2slk!4v1721225834362!5m2!1sen!2slk" width="400" height="150" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                                    </li>
                                </ul>
                            </div>
                            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                <h2 className="mb-8 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                                <form id="contactForm">
                                    <div className="mb-6">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full opacity-25 rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="name" />
                                            </div>
                                            <div className="mx-0 mb-1 sm:mb-4">
                                                <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                                                <input type="email" id="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full opacity-25  rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0" name="email" />
                                            </div>
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                                            <textarea id="textarea" name="textarea" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full opacity-25  rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"></textarea>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="w-full bg-white text-primary font-bold px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="md:mt-16 text-center border-t border-gray-800 pt-10 md:pt-10">
                        <p className="text-gray-300">
                            &copy; 2023 IEEE CS SLIIT. All rights reserved.
                        </p>
                    </div>
                </div>
            </section>

            <style jsx>{`
                .custom-shape-divider-top-1721222845 {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    overflow: hidden;
                    line-height: 0;
                }
            `}</style>
        </>
    );
}
