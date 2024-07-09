import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { isDragActive, motion } from "framer-motion";
import { blur, translate } from "../../anim";

const getChar = (title) => {
  let char = [];
  title.split("").forEach((item, i) => {
    char.push(
      <motion.span
        custom={(i * 0.02, (title.length - i) * 0.01)}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={i}
      >
        {item}
      </motion.span>
    );
  });
  return char;
};
const Body = ({ links, selectedLink, setSelectedLink, setIsActive }) => {
  return (
    <div
      className={`${styles.body} text-black no-underline gap-x-4 flex flex-wrap  mt-[40px]`}
    >
      {links.map((item, i) => (
        <Link
          onMouseOver={() => {
            setSelectedLink({ isActive: true, index: i });
          }}
          onMouseLeave={() => {
            setSelectedLink({ isActive: false, index: i });
          }}
          key={i}
          href={item.link}
        >
          <div
            className="flex gap-x-2"
            onClick={() => {
              setIsActive(false);
            }}
          >
            <motion.p
              initial="initial"
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != i
                  ? "open"
                  : "closed"
              }
              className="text-4xl pt-4 font-normal items-center hover:font-semibold transition-all duration-300 ease-in-out uppercase"
            >
              {getChar(item.name)}
            </motion.p>
            <motion.p
              initial="initial"
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != i
                  ? "open"
                  : "closed"
              }
            >
              <FiArrowUpRight className="text-4xl self-center" />
            </motion.p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Body;
