"use client";
import { Canvas } from "@react-three/fiber";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FiArrowUpRight, FiArrowRight, FiArrowUpLeft } from "react-icons/fi";

const Experience = () => {
  const experiences = [
    {
      title: "Front-End Developer",
      organization: "Kementerian Keuangan",
      description:
        "Made a website for the Ministry of Finance using NextJS and Next Auth with 2 other front-end developers and 1 back-end developer.",
    },
    {
      title: "Front-End Web Developer Intern",
      organization: "Peluang.co",
      description:
        "Contributed in developing a website using NextJS and with Typescript with 4 other frontend developers.",
    },
    {
      title: "Front-End Web Developer",
      organization: "INJECT - KSM Android UPNVJ",
      description:
        " Responsible for five work programs and two non-work programs in the Communication and Information division. Responsible for managing four of the Communication and Information Department staff.",
    },
    {
      title: "Head of Communication and Information Department",
      organization: "KSM Android UPNVJ",
      description:
        "Joined forces with a team of front-end developers in the  journey of enhancing the Learning Management System (LMS) for KSM Android.",
    },
    {
      title:
        "Project-Based Virtual Intern : UI/UX Designer Niagahoster x Rakamin Academy Niagahoster - Web Hosting Unlimited Indonesia",
      organization: "Rakamin",
      description:
        "I Made a redesign for Niagahoster's hosting website that is backed up by my own UX research to understand the preferences, pain points, and behavior of the target audience and Contribute to the improvement of Niagahoster's web page and gain valuable experience in UX research.",
    },
  ];
  const COLORS = ["#910A67", "#FFA62F", "#dd335c", "#ce84cf"];
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 100%, #020617 65%,${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    });
  }, []);
  return (
    <motion.div
      id="experience"
      style={{
        backgroundImage,
      }}
      className="relative flex min-h-screen flex-col  items-start justify-center overflow-hidden bg-[#1d2949] px-8  text-gray-200"
    >
      <div className="flex flex-col sm:flex-row gap-4 mt-[20rem] ">
        <div className="z-1 flex flex-col items-start">
          <h1 className="flex max-w-2xl gap-x-2 font-bold text-white text-3xl leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Experiences
            <FiArrowUpRight className="max-w-2xl text-white transition-transform hover:rotate-90" />
          </h1>

          <p className="my-6 max-w-lg text-base leading-relaxed md:text-lg md:leading-relaxed">
            A journey through my professional and personal growth, showcasing
            the diverse roles and challenges I have embraced.
          </p>
        </div>
        <div className="flex-col flex gap-y-10">
          {experiences.map((experience, index) => (
            <div key={index} className="text-end">
              <div className="flex flex-wrap w-full justify-between ">
                <FiArrowUpLeft className="max-w-lg" />
                <div>
                  <h3 className="text-xl font-bold">{experience.title}</h3>
                  <h4 className="text-md font-medium my-2">
                    {experience.organization}
                  </h4>
                </div>
              </div>
              <p className="text-sm">{experience.description}</p>
              <div className="flex w-full border-b-2 mt-6 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );

};

export default Experience;
