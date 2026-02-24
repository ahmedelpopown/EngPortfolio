import { Canvas } from "@react-three/fiber";
import "./hero.css";
import Speech from "./Speech";
import { motion } from "motion/react";
import Shape from "./Shape";
import { Suspense, useEffect, useRef, useState } from "react";

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
 const scrollToBottom = () => {
  const height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight
  );

  window.scrollTo({
    top: height,
    behavior: "smooth",
  });
};
  return (
    <div className="flex h-full overflow-hidden hero ">
      {/*  */}
      <div className="flex flex-col justify-between w-[50%] h-full hSection sm:gap-0 left">
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle sm:mt-0  md:mt-[50px] text-[100px] text-pink-400"
        >
          Hey There,
          <br />
          <span className="text-white">I&apos;m Ahmed!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="w-[30%] awards"
        >
          <motion.h2 variants={awardVariants}>Top Rated Designer</motion.h2>
          <motion.p
            variants={awardVariants}
            className="text-[14px] text-[#ddd] mt-[16px] mb-0"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </motion.p>
          <motion.div
            variants={awardVariants}
            className="flex awardList gap-[8px]"
          >
            <motion.img
              variants={awardVariants}
              src="/award1.png"
              alt=""
              className="w-[36px] h-[36px] p-[8px] bg-white rounded-full  "
            />
            <motion.img
              variants={awardVariants}
              src="/award2.png"
              alt=""
              className="w-[36px] h-[36px] p-[8px] bg-white rounded-full  "
            />
            <motion.img
              variants={awardVariants}
              src="/award3.png"
              alt=""
              className="w-[36px] h-[36px] p-[8px] bg-white rounded-full  "
            />
          </motion.div>
        </motion.div>
        {/* SCROLL SVG */}
        <motion.a
          animate={{ y: [0, 5], opacity: [0, 1, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
          href="#services"
          className="scroll mb-[50px] w-max"
        >
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
              animate={{ y: [0, 5] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
              }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>
      <div className="items-end w-[50%] h-full flex flex-col justify-between hSection right">
        {/* FOLLOW */}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="flex flex-col follow gap-[12px] p-[16px] bg-[#2f204e] rounded-b-[10px] "
        >
          <motion.a variants={followVariants} href="/">
            <img src="/instagram.png" alt="" className="w-[20px] h-[20px]" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/facebook.png" alt="" className="w-[20px] h-[20px]" />
          </motion.a>
          <motion.a variants={followVariants} href="/">
            <img src="/youtube.png" alt="" className="w-[20px] h-[20px]" />
          </motion.a>
          <motion.div
            variants={followVariants}
            className="followTextContainer w-[20px] h-[20px]"
          >
            <div className="followText ">FOLLOW ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate w-[60%] flex flex-col items-center gap-[8px] text-center leading-[24px] font-[300] text-[#ddd]"
        >
          <img src="/certificate.png" alt="" className="w-[70px] h-[70px]" />
          LMA CERTIFICED
          <br />
          PROFESSIONAL
          <br />
          UI DESIGNER
        </motion.div>
        {/* CONTACT BUTTON */}
    
          <motion.a
            href="#contact"
              onClick={scrollToBottom}
            className="contactLink mb-[50px]"
            animate={{
              x: [200, 0],
              opacity: [0, 1],
            }}
            transition={{
              duration: 2,
            }}
        
          >
            <motion.div
              className="relative contactButton"
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <svg viewBox="0 0 200 200" width="150" height="150">
                <circle cx="100" cy="100" r="90" fill="pink" />
                <path
                  id="innerCirclePath"
                  fill="none"
                  d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                />
                <text className="text-[20px] circleText">
                  <textPath href="#innerCirclePath">Hire Now •</textPath>
                </text>
                <text className="text-[20px] circleText">
                  <textPath href="#innerCirclePath" startOffset="44%">
                    Contact Me •
                  </textPath>
                </text>
              </svg>
              <div className="absolute top-0 bottom-0 left-0 right-0 m-auto arrow w-[80px] h-[80px] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="50"
                  height="50"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                >
                  <line x1="6" y1="18" x2="18" y2="6" />
                  <polyline points="9 6 18 6 18 15" />
                </svg>
              </div>
            </motion.div>
          </motion.a>
         
      </div>
      <div className="absolute top-0 left-0  w-full h-full z-[-1] bg  ">
        {/* 3d */}
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
          </Suspense>
        </Canvas>
        <div className="absolute bottom-0 left-0 right-0 m-auto hImg h-[80%] w-max">
          <img src="/hero.png" alt="" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
