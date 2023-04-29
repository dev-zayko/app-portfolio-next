import HomeCard from "@/components/Cards/HomeCard";
import ParentMotion from "@/components/Animation/Motion/ParentMotion";
import { Variants, motion } from "framer-motion";
import ContainerBlock from "../components/ContainerBlock";
import { myData } from "../utils/data";

const childrenVariant: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
};

const divVariant: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
    scale: [1, 2, 2, 1, 1],
  },
};

export default function Home() {
  return (
    <ContainerBlock
      title="Pablo Rodriguez - Programador Junior - Full Stack"
      description="Programador en NodeJs, React, React Native, Laravel, PHP, JAVA, HTML, CSS, JAVASCRIPT, MYSQL, SQLSERVER"
    >
      <ParentMotion>
        <div>
          {myData.map((item, index) => {
            return (
              <div key={item.name}>
                <motion.div
                  className={"child w-1/2 h-100"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  variants={childrenVariant}
                >
                  <h1 className={"text-8xl font-mono text-my-name"}>
                    {item.name}
                  </h1>
                </motion.div>
                {Math.max(index) ? (
                  <>
                    <motion.div className={"w-1/2 h-40"} variants={divVariant}>
                      <div className="cybr-txt">
                        <h2 className={"text-6xl font-mono text-gray-400"}>
                          Analista Programador
                        </h2>
                        <span aria-hidden className="cybr-txt__glitch">
                          <h2 className={"text-6xl font-mono text-gray-400"}>
                            Analista Programador
                          </h2>
                        </span>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
          <motion.div variants={childrenVariant}>
            <HomeCard />
          </motion.div>
        </div>
      </ParentMotion>
    </ContainerBlock>
  );
}
