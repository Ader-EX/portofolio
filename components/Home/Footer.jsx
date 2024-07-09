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

const Footer = () => {
  const COLORS = ["#910A67", "#FFA62F", "#dd335c", "#ce84cf"];
  const color = useMotionValue(COLORS[0]);
  const border = useMotionTemplate`1px solid ${color}`;
  const colorText = useMotionTemplate`1px solid ${color}`;
  const textShadow = useMotionTemplate`0px 0px 8px rgba(${color}, ${color}, ${color}, 1)`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 40%,${color})`;
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
      id="home"
      style={{
        backgroundImage,
      }}
      className="relative grid h-[30vh] place-content-center overflow-hidden bg-[#020617] px-4  text-gray-200"
    ></motion.div>
  );
};

export default Footer;
