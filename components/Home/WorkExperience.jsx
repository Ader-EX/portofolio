"use client";
import { Canvas } from "@react-three/fiber";
import Lenis from "lenis";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { use, useEffect, useRef, useState } from "react";
import Picture1 from "../../public/images/new.jpg";
import Picture2 from "../../public/images/box.jpg";
import klc from "../../public/images/thumbnail/klc-akreditasi.jpg";
import dig from "../../public/images/thumbnail/dignition.jpg";
import estate from "../../public/images/thumbnail/estate.jpg";
import movie from "../../public/images/thumbnail/movie.jpg";
import perac from "../../public/images/thumbnail/perac.jpg";
import peluang from "../../public/images/thumbnail/peluang.jpg";
import food from "../../public/images/thumbnail/food.jpg";
import night from "../../public/images/thumbnail/night.jpg";
import shop from "../../public/images/thumbnail/shop.jpg";

import { contain } from "three/src/extras/TextureUtils";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { blur } from "@/app/header/anim";

import Link from "next/link";

const WorkExperience = () => {
  const projects = [
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
        "Made a web for a franchise businesss e-commerce . This project used NextJS, Typescript, and Zod.",
      image: peluang,
      direction: "r",
      link: "https://peluang.co",
    },
    {
      title: "Dignition Learning Management System",
      year: "©2023",
      description:
        "A website dedicated to UPN Veteran Jakarta's student club. Dignition is a Learning Management System with a goal to develop student skills",
      image: dig,
      direction: "l",
      link: "https://dignition.androidupnvj.com",
    },

    // Add more projects as needed
  ];
  const COLORS = ["#910A67", "#FFA62F", "#dd335c", "#ce84cf"];
  const color = useMotionValue(COLORS[0]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #0B0F1B 60%,${color})`;
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

  const [isHovered, setIsHovered] = useState(false);
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: null,
  });

  function ContentLeft({ project, i, setSelectedLink }) {
    return (
      <>
        <motion.div
          onMouseEnter={() => {
            setSelectedLink({ isActive: true, index: i });
          }}
          onMouseLeave={() => {
            setSelectedLink({ isActive: false, index: null }); // Reset index to null on mouse leave
          }}
          initial="initial"
          variants={blur}
          animate={
            selectedLink.isActive && selectedLink.index !== i
              ? "open"
              : "closed"
          }
          className={`flex flex-col h-[58vh] hover:bg-[#12182b]  bg-[#020617] transition duration-300 ease-in-out    pt-4 font-normal items-center  `}
        >
          <Link
            href={project.link}
            className="flex-grow flex p-4 flex-col justify-between"
          >
            <div className="flex w-full flex-wrap text-4xl justify-between">
              <h1 className="font-bold">{project.title}</h1>
              <h1 className="font-light">{project.year}</h1>
            </div>
            <div className="">
              <p className="flex gap-x-4 text-xl">
                {project.description}
                <FiArrowUpRight className="text-6xl shrink-0" />
              </p>
            </div>
          </Link>
        </motion.div>
        <motion.div
          onMouseEnter={() => {
            setSelectedLink({ isActive: true, index: i });
          }}
          onMouseLeave={() => {
            setSelectedLink({ isActive: false, index: null }); // Reset index to null on mouse leave
          }}
          initial="initial"
          variants={blur}
          animate={
            selectedLink.isActive && selectedLink.index !== i
              ? "open"
              : "closed"
          }
        >
          <Link href={project.link}>
            <Image
              src={project.image}
              alt=""
              width={500}
              height={300}
              layout="responsive"
            />
          </Link>
        </motion.div>
      </>
    );
  }

  function ContentRight({ project, i, setSelectedLink }) {
    return (
      <>
        <motion.div
          onMouseEnter={() => {
            setSelectedLink({ isActive: true, index: i });
          }}
          onMouseLeave={() => {
            setSelectedLink({ isActive: false, index: null }); // Reset index to null on mouse leave
          }}
          initial="initial"
          variants={blur}
          animate={
            selectedLink.isActive && selectedLink.index !== i
              ? "open"
              : "closed"
          }
        >
          <Link href={project.link}>
            <Image
              src={project.image}
              alt=""
              width={500}
              height={300}
              layout="responsive"
            />
          </Link>
        </motion.div>
        <motion.div
          onMouseEnter={() => {
            setSelectedLink({ isActive: true, index: i });
          }}
          onMouseLeave={() => {
            setSelectedLink({ isActive: false, index: null });
          }}
          initial="initial"
          variants={blur}
          animate={
            selectedLink.isActive && selectedLink.index !== i
              ? "open"
              : "closed"
          }
          className={`flex flex-col h-[58vh] hover:bg-[#12182b] bg-[#020617]  transition duration-300 ease-in-out  pt-4 font-normal items-center  `}
        >
          <Link
            href={project.link}
            className="flex-grow flex p-4 flex-col justify-between"
          >
            <div className="flex w-full flex-wrap text-4xl justify-between">
              <h1 className="font-bold">{project.title}</h1>
              <h1 className="font-light">{project.year}</h1>
            </div>
            <div className="">
              <p className="flex gap-x-4 text-xl">
                {project.description}
                <FiArrowUpRight className="text-6xl shrink-0" />
              </p>
            </div>
          </Link>
        </motion.div>
      </>
    );
  }
  return (
    <motion.div
      id="projects"
      className="relative items-start  overflow-hidden bg-[#020617]  text-gray-200"
    >
      <div className=" ">
        <div className="h-[30vh]"></div>
        <div ref={container}>
          <div className="absolute inset-0 z-8 h-full w-full  opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <Slider
            src={Picture1}
            left={"-55%"}
            progress={scrollYProgress}
            direction="l"
          />
          <Slider
            src={Picture2}
            left={"-25%"}
            progress={scrollYProgress}
            direction="r"
          />
          <Slider
            src={Picture1}
            left={"-75%"}
            progress={scrollYProgress}
            direction="l"
          />
        </div>

        <div className="h-[30vh]"></div>
        {projects.map((project, i) => (
          <section key={i} className="grid grid-cols-1 md:grid-cols-2   ">
            {project.direction === "l" ? (
              <>
                <ContentLeft
                  project={project}
                  i={i}
                  setSelectedLink={setSelectedLink}
                />
              </>
            ) : (
              <>
                <ContentRight
                  project={project}
                  i={i}
                  setSelectedLink={setSelectedLink}
                />
              </>
            )}
          </section>
        ))}
      </div>
    </motion.div>
  );
};

const Slider = ({ src, left, progress, direction }) => {
  const dir = direction === "l" ? -1 : 1;
  const x = useTransform(progress, [0, 1], [-250 * dir, 250 * dir]);
  return (
    <motion.div className="relative flex whitespace-nowrap" style={{ left, x }}>
      <Phrase src={src} />
      <Phrase src={src} />
      <Phrase src={src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className="flex gap-5 items-center">
      <p className="text-[7.5vw]">Work Projects</p>
      <span
        className="relative h-[7.5vw] aspect-[6/3] overflow-hidden"
        style={{
          clipPath: "polygon(50% 0%, 75% 50%, 50% 100%, 25% 50%)",
        }}
      >
        <Image alt="" fill src={src} style={{ objectFit: "cover" }} />
      </span>
    </div>
  );
};

export default WorkExperience;
