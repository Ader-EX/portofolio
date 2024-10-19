"use client";
import Contacts from "@/components/Home/Contacts";
import Experience from "@/components/Home/Experiences";
import NewHome from "@/components/Home/Home";
import Projects from "@/components/Home/Projects";
import Footer from "@/components/Home/Footer";
import { motion } from "framer-motion";
import CursorFollower from "@/components/Home/CursorFollower";
import WorkExperience from "@/components/Home/WorkExperience";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  return (
    <div className="bg-[#1d2949]">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <NewHome />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Experience />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <WorkExperience />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Projects />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Contacts />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <Footer />
      </motion.div>
      <CursorFollower />
    </div>
  );
}
