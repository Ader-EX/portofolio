import React from "react";
import { opacity } from "../../anim";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.scss";
const index = ({ src, isActive }) => {
  return (
    <motion.div
      className={styles.imageContainer}
      variants={opacity}
      animate={isActive ? "open" : "closed"}
    >
      <Image alt="" src={`/images/${src}`} fill={true} />
    </motion.div>
  );
};

export default index;
