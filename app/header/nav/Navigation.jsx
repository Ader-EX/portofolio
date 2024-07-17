"use client";
import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./body/Body";
import Image from "./image/Image";
import Footer from "./footer/Footer";
const Navigation = ({ setIsActive }) => {
  const links = [
    { name: "Home", link: "/#home", src: "about.jpg" },

    { name: "Experience", link: "/#experience", src: "experience.jpeg" },
    { name: "Projects", link: "/#projects", src: "project.png" },
    { name: "Contact", link: "/#contact", src: "contact.png" },
    { name: "CV", link: "./files/cv.pdf", src: "contact.png" },
  ];
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });

  return (
    <motion.div
      className="overflow-hidden "
      variants={height}
      initial="initial"
      animate="enter"
      exit={"exit"}
    >
      <div className="m-[0px] flex">
        <div>
          <Body
            setIsActive={setIsActive}
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
          {/* FOOTER */}
        </div>
        <Image
          alt=""
          src={links[selectedLink.index].src}
          isActive={selectedLink.isActive}
        />
        {/* IMG */}
      </div>
    </motion.div>
  );
};

export default Navigation;
