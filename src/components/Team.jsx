import React from "react";
import IASprof from "../assets/IASprof.jpg";
import ShafkhanPhoto from "../assets/committee2026/shafkhan-mohammed.jpg";
import MoamPhoto from "../assets/committee2026/moam-misfar-saadhath-ahmed.jpg";
import OmaliPhoto from "../assets/committee2026/omali-nimesha.jpg";
import SakinduPhoto from "../assets/committee2026/sakindu-gamage.jpg";
import NicolPhoto from "../assets/committee2026/nicol-pathiranage.jpg";
import NadunPhoto from "../assets/committee2026/nadun-bopitiya.jpg";

const committeeMembers = [
  {
    full_name: "Shafkhan Mohammed",
    position: "Chairperson",
    email: "shafkhan@ieee.org",
    photo: ShafkhanPhoto,
  },
  {
    full_name: "Moam Misfar Saadhath Ahmed",
    position: "Vice Chairperson",
    email: "saadhathxlr8@gmail.com",
    photo: MoamPhoto,
  },
  {
    full_name: "Omali Nimesha",
    position: "Secretary",
    email: "Omalinimesha123@gmail.com",
    photo: OmaliPhoto,
  },
  {
    full_name: "Sakindu Gamage",
    position: "Treasurer",
    email: "saki.19.kgsn@gmail.com",
    photo: SakinduPhoto,
  },
  {
    full_name: "Nicol Pathiranage",
    position: "Editor",
    email: "nicolsihilalnimsara@gmail.com",
    photo: NicolPhoto,
  },
  {
    full_name: "Nadun Bopitiya",
    position: "Assistant Secretary",
    email: "nadundananjana2020@gmail.com",
    photo: NadunPhoto,
  },
];

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

      {/* === Current Executive Board (2026/27) === */}
      <section className="max-w-screen-2xl px-10 mx-auto mb-32">
        <h1 className="my-3 text-center font-sans text-4xl font-bold text-primary">
          Current Executive Board<span className="text-black">.</span>
        </h1>
        <p className="text-gray-600 text-md text-center mb-10">
          IEEE Industry Applications Society (IAS) - SBC08341A - 2026/27.
        </p>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {committeeMembers.map((member) => (
            <article
              key={member.email}
              className="mx-auto w-full max-w-[300px] rounded-xl bg-white p-4 shadow-lg hover:shadow-xl hover:scale-105 transform translate duration-300 flex flex-col items-center"
            >
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-lg bg-gray-100 mb-4">
                <img
                  src={member.photo}
                  alt={`${member.full_name} profile`}
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="text-center w-full">
                <h2 className="text-gray-900 font-semibold text-lg">{member.full_name}</h2>
                <p className="text-primary mt-1 text-md font-semibold">{member.position}</p>
                <p className="text-gray-600 mt-2 text-sm break-all">{member.email}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}