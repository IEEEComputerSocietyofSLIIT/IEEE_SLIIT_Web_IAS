import React from "react";
import IASprof from "../assets/IASprof.jpg";
import ShafkhanPhoto from "../assets/committee2026/shafkhan-mohammed.jpg";
import MoamPhoto from "../assets/committee2026/moam-misfar-saadhath-ahmed.jpg";
import OmaliPhoto from "../assets/committee2026/omali-nimesha.jpg";
import SakinduPhoto from "../assets/committee2026/sakindu-gamage.jpg";
import NicolPhoto from "../assets/committee2026/nicol-pathiranage.jpg";
import NadunPhoto from "../assets/committee2026/nadun-bopitiya.jpg";
import RumanaPhoto from "../assets/committee2026/Rumana Azmi - Rumana Azmi.jpg";

const committeeMembers = [
  {
    full_name: "Shafkhan Mohammed",
    position: "Chairperson",
    email: "shafkhan@ieee.org",
    photo: ShafkhanPhoto,
    linkedin: "http://www.linkedin.com/in/shafkhan-mohammed"
  },
  {
    full_name: "Moam Misfar Saadhath Ahmed",
    position: "Vice Chairperson",
    email: "saadhathxlr8@gmail.com",
    photo: MoamPhoto,
    linkedin: "https://lk.linkedin.com/in/saadhath-ahmed-370251188"
  },
  {
    full_name: "Omali Nimesha",
    position: "Secretary",
    email: "Omalinimesha123@gmail.com",
    photo: OmaliPhoto,
    linkedin: "https://www.linkedin.com/in/omali-nimesha?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  {
    full_name: "Sakindu Gamage",
    position: "Treasurer",
    email: "saki.19.kgsn@gmail.com",
    photo: SakinduPhoto,
    linkedin: "https://www.linkedin.com/in/sakindu-niman-4811a0269"
  },
  {
    full_name: "Nicol Pathiranage",
    position: "Editor",
    email: "nicolsihilalnimsara@gmail.com",
    photo: NicolPhoto,
    linkedin: "https://www.linkedin.com/in/nicol-sihilal-880513292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    full_name: "Nadun Bopitiya",
    position: "Assistant Secretary",
    email: "nadundananjana2020@gmail.com",
    photo: NadunPhoto,
    linkedin: "http://www.linkedin.com/in/nadun-dananjana"
  },
  {
    full_name: "Rumana Azmi",
    position: "Assistant Treasurer",
    email: "rum4na.azmi@gmail.com",
    photo: RumanaPhoto,
    linkedin: "https://www.linkedin.com/in/rumana-azmi-b624832b0?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
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
        <div className="mx-auto max-w-6xl">
          {/* Top Row: 4 members */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {committeeMembers.slice(0, 4).map((member) => (
              <article
                key={member.email}
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[300px] rounded-xl bg-white p-4 shadow-lg hover:shadow-xl hover:scale-105 transform translate duration-300 flex flex-col items-center cursor-pointer"
                onClick={() => window.open(member.linkedin, "_blank")}
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

          {/* Bottom Row: remainder */}
          <div className="flex flex-wrap justify-center gap-6">
            {committeeMembers.slice(4).map((member) => (
              <article
                key={member.email}
                className="w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] max-w-[300px] rounded-xl bg-white p-4 shadow-lg hover:shadow-xl hover:scale-105 transform translate duration-300 flex flex-col items-center cursor-pointer"
                onClick={() => window.open(member.linkedin, "_blank")}
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
        </div>
      </section>
    </>
  );
}