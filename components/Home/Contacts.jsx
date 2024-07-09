"use client";
import { Canvas } from "@react-three/fiber";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import Image from "next/image";
import Picture1 from "../../public/images/new.jpg";
import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FiArrowUpRight, FiArrowRight, FiArrowUpLeft } from "react-icons/fi";
import Link from "next/link";

const Contacts = () => {
  return (
    <motion.div
      id="contact"
      className="relative flex min-h-screen flex-col  bg-[#020617] overflow-hidden px-8 text-gray-200 "
    >
      <div className="h-[10vh]"></div>
      <section className="grid grid-cols-1 md:grid-cols-2 border-2 h-auto md:h-[70vh]">
        <div className="flex flex-col justify-between p-4 md:p-6 border-b md:border-b-0 md:border-r-2">
          <div>
            <h1 className="text-4xl md:text-6xl">
              Got A Project? <br />
              Contact Me <br />
              At
            </h1>
          </div>
          <div className="flex flex-col md:flex-row w-full justify-between mt-4">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-md font-light mb-2">Socials</h3>
              <Link
                href={"https://www.linkedin.com/in/muhammad-fadhil-musyaffa/"}
                className="text-xl md:text-3xl font-semibold hover:font-bold"
              >
                Linkedin
              </Link>
              <Link
                href={"https://www.instagram.com/fdhlchr_/"}
                className="text-xl md:text-3xl font-semibold hover:font-bold"
              >
                Instagram
              </Link>
              <Link
                href={"https://github.com/Ader-EX"}
                className="text-xl md:text-3xl font-semibold hover:font-bold"
              >
                Github
              </Link>
            </div>
            <FiArrowUpRight className="shrink-0 text-4xl md:text-5xl mt-4 md:mt-0" />
          </div>
        </div>
        <div className="flex flex-col justify-between border-t md:border-t-0 md:border-r-2">
          <div> </div>
          <div className="flex flex-col md:flex-row w-full justify-between border-t-2 p-4 mt-4 md:mt-0">
            <div className="flex flex-col gap-y-1">
              <h3 className="text-md font-light mb-2">Mail Me At</h3>
              <h2 className="text-xl md:text-3xl font-semibold">
                musyaffa262@gmail.com
              </h2>
            </div>
            <FiArrowUpRight className="shrink-0 text-4xl md:text-5xl mt-4 md:mt-0" />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contacts;
