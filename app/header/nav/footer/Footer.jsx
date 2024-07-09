import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { translate } from "../../anim";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={(0.2, 0)}
          variants={translate}
          initial="initial"
          animate="enter"
          exit={"exit"}
        >
          <span>Made By </span>
          Muhammad Fadhil Musyaffa
        </motion.li>
        <motion.li
          custom={(0.2, 0)}
          variants={translate}
          initial="initial"
          animate="enter"
          exit={"exit"}
        >
          <span>Copyright </span>© 2024
        </motion.li>
      </ul>
    </div>
  );
};

export default Footer;
