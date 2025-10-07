import React from "react";
import Profile from "../assets/profile.jpg";
import IASprof from "../assets/IASprof.jpg";
import Hafsa from "../assets/Hafsa Zainab - Vice-Chair.jpg";
import Yasas from "../assets/Yasas Maddumage.png";
import Pasindi from "../assets/Pasindi Rathnaweera .png";
import Safiyyah from "../assets/Safiyyah.png";
import Shafkhan from "../assets/Shafkhan Mohammed.png";

export default function Team() {
  return (
    <>
      {/* === Chapter Advisor Section === */}
      <section className="max-w-screen-2xl px-10 mx-auto mb-20">
        <h1 className="mb-8 text-center font-sans text-4xl font-bold text-primary">
          Chapter Advisor<span className="text-black">.</span>
        </h1>

        <div className="mx-auto flex align-middle justify-center">
          <article className="w-full md:w-[800px] md:items-center md:flex grid rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <div className="relative md:w-1/2 flex items-end overflow-hidden rounded-xl">
              <img src={IASprof} alt="Advisor" className="w-full" />
            </div>

            <div className="mt-1 p-2 md:p-10">
              <h2 className="text-gray-900 font-semibold text-lg">
                Prof. Anuradha Jayakody
              </h2>
              <p className="text-primary mt-1 text-sm font-semibold">
                Head, Department of Computer Systems Engineering, Faculty of
                Computing - SLIIT
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* === Current Executive Board (2025/26) === */}
      <section className="max-w-screen-2xl px-10 mx-auto mb-32">
        <h1 className="my-3 text-center font-sans text-4xl font-bold text-primary">
          Current Executive Board<span className="text-black">.</span>
        </h1>
        <p className="text-gray-600 text-md text-center mb-10">
          The Executive Board of IEEE IAS Chapter 2025/26 of SLIIT.
        </p>

        {/* === Top 3 (Chair, Vice, Secretary) === */}
        <div className="mx-auto mb-14 grid max-w-screen-xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Chairperson */}
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={Hafsa} alt="Chairperson" />
            </div>
            <div className="mt-1 p-2">
              <h2 className="text-gray-900 font-semibold text-lg">
                Hafsa Zainab Kaleelur Rahman
              </h2>
              <p className="text-primary mt-1 text-md font-semibold">
                Chairperson
              </p>
            </div>
          </article>

          {/* Vice Chairperson */}
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={Yasas} alt="Vice Chairperson" />
            </div>
            <div className="mt-1 p-2">
              <h2 className="text-gray-900 font-semibold text-lg">
                Yasas Maddumage
              </h2>
              <p className="text-primary mt-1 text-md font-semibold">
                Vice Chairperson
              </p>
            </div>
          </article>

          {/* Secretary */}
          <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={Pasindi} alt="Secretary" />
            </div>
            <div className="mt-1 p-2">
              <h2 className="text-gray-900 font-semibold text-lg">
                Pasindi Rathnaweera
              </h2>
              <p className="text-primary mt-1 text-md font-semibold">
                Secretary
              </p>
            </div>
          </article>
        </div>

        {/* === Last 2 (Treasurer & Assistant Secretary) Centered === */}
        <div className="mx-auto flex flex-wrap justify-center gap-6 max-w-screen-lg">
          {/* Treasurer */}
          <article className="w-full sm:w-[280px] md:w-[300px] rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={Safiyyah} alt="Treasurer" />
            </div>
            <div className="mt-1 p-2 text-center">
              <h2 className="text-gray-900 font-semibold text-lg">
                Safiyyah Karnain
              </h2>
              <p className="text-primary mt-1 text-md font-semibold">
                Treasurer
              </p>
            </div>
          </article>

          {/* Assistant Secretary */}
          <article className="w-full sm:w-[280px] md:w-[300px] rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-110 transform translate duration-300">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={Shafkhan} alt="Assistant Secretary" />
            </div>
            <div className="mt-1 p-2 text-center">
              <h2 className="text-gray-900 font-semibold text-lg">
                Shafkhan Mohammed
              </h2>
              <p className="text-primary mt-1 text-md font-semibold">
                Assistant Secretary
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}