"use client";
import styles from "./style.module.scss";
import Link from "next/link";
import { Shrikhand } from "next/font/google";
import { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { motion, AnimatePresence, backIn } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Navigation from "./nav/Navigation";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { background, opacity } from "./anim";
import Image from "next/image";
const staggerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Delay in seconds between each child's animation
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05, // Faster exit stagger
    },
  },
};

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={`${styles.header} text-black mb-[50rem]`}>
      <div className={styles.bar}>
        <Link href="/" className="text-lg italic">
          <Image width={25} height={25} src="/logo.svg" alt="logo" />
        </Link>
        <div
          onMouseDown={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            } `}
          ></div>
          <div className={styles.label}>
            <motion.p
              className="flex gap-x-1 "
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Menu
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? "open" : "closed"}
          className={styles.shopContainer}
        >
          <div className="flex gap-x-2">
            <p className="cursor-default  text-white">;a</p>
            <p className="cursor-default text-white">;asa</p>

            <Link href={"https://www.instagram.com/fdhlchr_/"} className="mx-6">
              <FaInstagram className="self-center text-xl transition-transform duration-300 ease-in-out hover:scale-110" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/muhammad-fadhil-musyaffa/"}
            >
              <FaLinkedin className="self-center text-xl transition-transform duration-300 ease-in-out hover:scale-110" />
            </Link>
            <p className="cursor-default">SOCIALS</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.background}
        variants={background}
        animate={isActive ? "open" : "closed"}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && (
          <motion.div
            variants={staggerVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Navigation setIsActive={setIsActive} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
