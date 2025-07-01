"use client";
import Lenis from "lenis";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

import klc from "../../public/images/thumbnail/klc-akreditasi.jpg";
import dig from "../../public/images/thumbnail/dignition.jpg";
import peluang from "../../public/images/thumbnail/peluang.jpg";
import Picture1 from "../../public/images/new.jpg";
import Picture2 from "../../public/images/box.jpg";
import { motion, animate, useScroll, useTransform } from "framer-motion";

export const WorkExperienceProjects = [
  {
    title: "KLC - AKREDITASI",
    year: "©2024",
    description:
      "Made a web that is used to assess the feasibility of financial training programs organized by the Indonesian Ministry of Finance. This project used NextJS, NextAuth, and TailwindCSS.",
    image: klc,
    direction: "l",
    link: "https://bppk.kemenkeu.go.id/akreditasi/",
  },
  {
    title: "Peluang.co's Website",
    year: "©2023",
    description:
      "Made a web for a franchise business e-commerce. This project used NextJS, Typescript, and Zod.",
    image: peluang,
    direction: "r",
    link: "https://peluang.co",
  },
  {
    title: "Dignition Learning Management System",
    year: "©2023",
    description:
      "A website dedicated to UPN Veteran Jakarta's student club. Dignition is a Learning Management System with a goal to develop student skills.",
    image: dig,
    direction: "l",
    link: "https://dignition.androidupnvj.com",
  },
];

const WorkExperience = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const ContentCard = ({ project }) => (
    <Link
      href={project.link}
      className="flex flex-col h-[58vh] hover:bg-[#12182b] bg-[#020617] transition duration-300 ease-in-out pt-4 font-normal items-center"
    >
      <div className="flex-grow flex p-4 flex-col justify-between">
        <div className="flex w-full flex-wrap text-4xl justify-between">
          <h1 className="font-bold">{project.title}</h1>
          <h1 className="font-light">{project.year}</h1>
        </div>
        <p className="flex gap-x-4 text-xl">
          {project.description}
          <FiArrowUpRight className="text-6xl shrink-0" />
        </p>
      </div>
      <div className="w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          style={{ objectFit: "cover" }}
        />
      </div>
    </Link>
  );

  const ContentLeft = ({ project }) => (
    <>
      <Link
        href={project.link}
        className="flex flex-col h-[58vh] hover:bg-[#12182b] bg-[#020617] transition duration-300 ease-in-out pt-4 font-normal items-center"
      >
        <div className="flex-grow flex p-4 flex-col justify-between">
          <div className="flex w-full flex-wrap text-4xl justify-between">
            <h1 className="font-bold">{project.title}</h1>
            <h1 className="font-light">{project.year}</h1>
          </div>
          <div>
            <p className="flex gap-x-4 text-xl">
              {project.description}
              <FiArrowUpRight className="text-6xl shrink-0" />
            </p>
          </div>
        </div>
      </Link>
      <Link href={project.link} className="w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          layout="responsive"
        />
      </Link>
    </>
  );

  const ContentRight = ({ project }) => (
    <>
      <Link href={project.link} className="w-full">
        <Image
          src={project.image}
          alt={project.title}
          width={500}
          height={300}
          layout="responsive"
        />
      </Link>
      <Link
        href={project.link}
        className="flex flex-col h-[58vh] hover:bg-[#12182b] bg-[#020617] transition duration-300 ease-in-out pt-4 font-normal items-center"
      >
        <div className="flex-grow flex p-4 flex-col justify-between">
          <div className="flex w-full flex-wrap text-4xl justify-between">
            <h1 className="font-bold">{project.title}</h1>
            <h1 className="font-light ">{project.year}</h1>
          </div>
          <div>
            <p className="flex gap-x-4 text-xl">
              {project.description}
              <FiArrowUpRight className="text-6xl shrink-0" />
            </p>
          </div>
        </div>
      </Link>
    </>
  );

  const Slider = ({ src, progress, direction }) => {
    const x = useTransform(
      progress,
      [0, 1],
      direction === "l" ? ["-100%", "0%"] : ["0%", "-100%"]
    );

    return (
      <motion.div
        className="relative flex whitespace-nowrap"
        style={{ x, position: "relative" }}
      >
        <Phrase src={src} />
        <Phrase src={src} />
        <Phrase src={src} />
      </motion.div>
    );
  };

  const Phrase = ({ src }) => (
    <div className="flex gap-5 items-center">
      <p className="text-[7.5vw]">Past Projects</p>
      <span
        className="relative h-[7.5vw] aspect-[6/3] overflow-hidden"
        style={{ clipPath: "polygon(50% 0%, 75% 50%, 50% 100%, 25% 50%)" }}
      >
        <Image alt="" fill src={src} style={{ objectFit: "cover" }} />
      </span>
    </div>
  );

  return (
    <div
      id="work"
      className="relative overflow-hidden bg-[#020617] text-gray-200"
    >
      <motion.div>
        <div ref={container}>
          <div className="absolute inset-0 z-8 h-full w-full  opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <Slider src={Picture1} progress={scrollYProgress} direction="l" />
          <Slider src={Picture2} progress={scrollYProgress} direction="r" />
          <Slider src={Picture1} progress={scrollYProgress} direction="l" />
        </div>
      </motion.div>
      <div className="h-[30vh]" />
      {/* Fade-mask wrapper for first 3 cards */}
      <div
        className="overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      >
        {WorkExperienceProjects.slice(0, 3).map((project, i) => (
          <section key={i} className="grid grid-cols-1 md:grid-cols-2">
            {project.direction === "l" ? (
              <ContentLeft project={project} />
            ) : (
              <ContentRight project={project} />
            )}
          </section>
        ))}
      </div>

      {/* MORE PROJECTS button always on top */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-50">
        <Link href="/projects">
          <button className="px-6 py-3 bg-white text-black rounded-md hover:opacity-80 transition">
            MORE PROJECTS
          </button>
        </Link>
      </div>

      <div className="h-[30vh]" />
    </div>
  );
};

export default WorkExperience;
