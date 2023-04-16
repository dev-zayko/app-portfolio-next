import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  index: number;
  children: string | JSX.Element | JSX.Element[];
};

export const CollapsedMotion = ({
  index,
  expanded,
  setExpanded,
  children,
}: any) => {
  const isOpen = index === expanded;
  console.log(index);
  return (
    <>
      <motion.header
        initial={false}
        animate={{ background: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : index)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={"content"}
            initial={"collapsed"}
            animate={"open"}
            exit={"collapsed"}
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};
