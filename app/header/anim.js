import { delay } from "framer-motion";

export const opacity = {
  initial: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.35 } },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.35,
    },
  },
};

export const transition = {
  duration: 0.7,
  ease: [0.79, 0.1, 0.25, 0.9],
};

export const height = {
  initial: { height: 0 },
  enter: { height: "auto", transition: transition },
  exit: {
    height: 0,
    transition,
  },
};

export const translate = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export const background = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
    transition,
  },
  closed: {
    height: 0,
    transition,
  },
};
export const backgroundTwo = {
  initial: {
    height: 0,
  },
  open: {
    height: "100vh",
    transition: {
      ...transition, // Spread existing transition properties
      delay: 0.5, // Add a delay of 0.5 seconds
    },
  },
  closed: {
    height: 0,
    transition: {
      ...transition, // Spread existing transition properties
      delay: 0.5, // Add a delay of 0.5 seconds
    },
  },
};

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(4px)",
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};