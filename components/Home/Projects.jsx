"use client";
import { Canvas } from "@react-three/fiber";
import Lenis from "lenis";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Picture1 from "../../public/images/new.jpg";
import Picture2 from "../../public/images/box.jpg";
import night from "../../public/images/thumbnail/night.jpg";
import quiz from "../../public/images/thumbnail/quizify.png";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { motion, animate, useScroll, useTransform } from "framer-motion";

export const PersonalProjects = [
  {
    title:
      "Smart Scheduling System with Genetic Algorithm and Simulated Annealing",
    year: "©2025",
    description:
      "Made a Fullstack website for a Quiz App using localStorage, Context, and a fully functional authorization. This project used React, FastAPI, and TailwindCSS.",
    image: quiz,
    direction: "l",
    link: "https://github.com/Ader-EX/skripsi",
  },
  {
    title: "Quizify Web App",
    year: "©2024",
    description:
      "Made a Fullstack website for a Quiz App using localStorage, Context, and a fully functional authorization. This project used React, FastAPI, and TailwindCSS.",
    image: quiz,
    direction: "r",
    link: "https://github.com/Ader-EX/DOT-frontend",
  },
  {
    title: "Movie Light",
    year: "©2024",
    description:
      "Made a Fullstack website that reads movie data and edit their metadatas like actors, studio, series, etc. This project used React, FastAPI, and TailwindCSS.",
    image: night,
    direction: "l",
    link: "https://github.com/Ader-EX/FARM-Movie",
  },
];

const Projects = () => {
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

  return (
    <div
      id="projects"
      className="relative overflow-hidden bg-[#020617] text-gray-200"
    >
      <div>
        <div className="h-[30vh]" />
        <motion.div>
          <div ref={container}>
            <div className="absolute inset-0 z-8 h-full w-full  opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <Slider src={Picture1} progress={scrollYProgress} direction="l" />
            <Slider src={Picture2} progress={scrollYProgress} direction="r" />
            <Slider src={Picture1} progress={scrollYProgress} direction="l" />
          </div>
        </motion.div>

        <div className="h-[30vh]" />

        <div
          className="relative overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, black 50%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        >
          {PersonalProjects.slice(0, 3).map((project, i) => (
            <section key={i} className="grid grid-cols-1 md:grid-cols-2">
              {project.direction === "l" ? (
                <ContentLeft project={project} />
              ) : (
                <ContentRight project={project} />
              )}
            </section>
          ))}
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <Link href="/projects">
            <button className="px-6 py-3 bg-white text-black rounded-md hover:opacity-80 transition">
              MORE PROJECTS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

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

export default Projects;
