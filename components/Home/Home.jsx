"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Shrikhand } from "next/font/google";
import { Tulpen_One } from "next/font/google";
const shrikhand = Shrikhand({ subsets: ["latin"], weight: ["400"] });
const tulpen_One = Tulpen_One({ subsets: ["latin"], weight: ["400"] });

const FallingStar = ({ initialX, delay }) => {
  const duration = Math.random() * 10 + 20;
  return (
    <motion.div
      initial={{ x: initialX, y: -50 }}
      animate={{ y: [0, 1000], x: initialX }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        delay: delay,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        width: "3px",
        height: "3px",
        backgroundColor: "white",
        borderRadius: "50%",

        filter: "blur(1px)",
      }}
    />
  );
};
const FallingStars = ({ count = 70 }) => {
  const [initialPositions, setInitialPositions] = useState([]);

  useEffect(() => {
    const positions = Array.from({ length: count }).map((_, index) => ({
      initialX: (window.innerWidth / count) * index,
      delay: Math.random() * 2,
    }));
    setInitialPositions(positions);
  }, [count]);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {initialPositions.map((pos, index) => (
        <FallingStar key={index} initialX={pos.initialX} delay={pos.delay} />
      ))}
    </div>
  );
};

const NewHome = () => {
  const COLORS = ["#910A67", "#FFA62F", "#dd335c", "#ce84cf"];
  const color = useMotionValue(COLORS[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const colorText = useMotionTemplate`1px solid ${color}`;
  const textShadow = useMotionTemplate`0px 0px 8px rgba(${color}, ${color}, ${color}, 1)`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #0B0F1B 60%,${color})`;
  useEffect(() => {
    animate(color, COLORS, {
      duration: 10,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    });
  }, []);
  return (
    <>
      <motion.div
        id="home"
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-[#1d2949] px-4  text-gray-200"
      >
        <div className="absolute inset-0 z-8 h-full w-full  opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative z-10 flex flex-col items-start">
          <h1 className="max-w-3xl font-bold flex gap-x-2 mb-4 text-white  text-3xl leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Welcome To My <br /> Web Portofolio
            <FiArrowUpRight className="transition-transform max-w-3xl text-white hover:rotate-90 " />
          </h1>
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
          >
            Muhammad Fadhil Musyaffa
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
          <p className="my-6 max-w-xl text-base leading-relaxed md:text-lg md:leading-relaxed">
            A passionate Web Developer. Proficient in Frontend with knowledge of
            React, Next.js, and Tailwind CSS. A passionate learner,
            collaborative and focused on creating impactful web experiences.
          </p>
        </div>
        <div className="absolute inset-0 z-0">
          <FallingStars />
        </div>
      </motion.div>
    </>
  );
};

export default NewHome;
