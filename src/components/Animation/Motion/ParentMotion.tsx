import React from "react";
import { motion, Variants } from "framer-motion";

const parentVariant: Variants = {
  initial: { x: "100%" },
  animate: { x: "calc(100vw - 90%)", transition: { staggerChildren: 1 } },
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const ParentMotion = ({ children }: Props) => {
  return (
    <motion.div
      className="sm:px-6 lg:px-8"
      initial="initial"
      animate="animate"
      variants={parentVariant}
    >
      {children}
    </motion.div>
  );
};

export default ParentMotion;
